import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Filter } from 'lucide-react';
import { products, getPowderProducts, getButterProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'powder' | 'butter'>('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : activeFilter === 'powder'
      ? getPowderProducts()
      : getButterProducts();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.products-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.product-grid-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Re-trigger animation when filter changes
  useEffect(() => {
    gsap.fromTo(
      '.product-grid-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.08 }
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <section ref={headerRef} className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="products-header max-w-3xl">
            <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
              Our Collection
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111214] mb-6">
              All Products
            </h1>
            <p className="text-lg text-[#6D7278]">
              Discover our range of premium peanut butter products. From protein-rich 
              powders to creamy natural spreads, find your perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="pb-20 lg:pb-32">
        <div className="w-full px-6 lg:px-12">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 text-sm text-[#6D7278] mr-4">
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            {[
              { key: 'all', label: 'All Products' },
              { key: 'powder', label: 'Peanut Butter Powder' },
              { key: 'butter', label: 'Natural Peanut Butter' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as typeof activeFilter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-[#111214] text-white'
                    : 'bg-white text-[#6D7278] hover:bg-[#F6F7FA] border border-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-grid-item group"
              >
                <div className="product-card p-5 lg:p-6 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-[#F6F7FA]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${product.color}15`,
                          color: product.color,
                        }}
                      >
                        {product.tagline}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#111214] mb-2">
                      {product.name}
                    </h3>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-[#6D7278] bg-[#F6F7FA] px-2 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xl text-[#111214]">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-[#6D7278] line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-[#2F6BFF] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6D7278]">No products found.</p>
            </div>
          )}

          {/* Shop CTA */}
          <div className="mt-16 text-center p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#111214] to-[#2a2c30] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                Shop All Products on Amazon
              </h3>
              <p className="text-[#B8BCC2] mb-6 max-w-md mx-auto">
                Get free delivery on eligible orders. Experience the Trubite difference today.
              </p>
              <a
                href="https://amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop on Amazon
              </a>
            </div>
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F6BFF]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4A9B5E]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
