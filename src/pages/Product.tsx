import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Check,
  Star,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getProductById, getFeaturedProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  const [selectedImage, setSelectedImage] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  // Get related products (excluding current)
  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== id)
    .slice(0, 3);

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-header-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.product-details-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.related-product-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: relatedRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [product]);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-[#111214] mb-4">
            Product Not Found
          </h1>
          <p className="text-[#6D7278] mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="w-full px-6 lg:px-12 py-4">
        <nav className="flex items-center gap-2 text-sm text-[#6D7278]">
          <Link to="/" className="hover:text-[#111214] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-[#111214] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#111214]">{product.name}</span>
        </nav>
      </div>

      {/* Product Header */}
      <section ref={headerRef} className="py-8 lg:py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="product-header-content grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-[#F6F7FA] rounded-3xl overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} - ${product.tagline}`}
                  className="w-full h-full object-contain p-6 lg:p-10"
                />

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Badge */}
                {product.badge && (
                  <div
                    className="absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Image Counter */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
                    {selectedImage + 1} / {product.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Grid */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square bg-[#F6F7FA] rounded-xl overflow-hidden transition-all ${
                        selectedImage === idx
                          ? 'ring-2 ring-offset-2'
                          : 'hover:opacity-80'
                      }`}
                      style={{
                        '--tw-ring-color': selectedImage === idx ? product.color : undefined,
                      } as React.CSSProperties}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-fit mb-4"
                style={{
                  backgroundColor: `${product.color}15`,
                  color: product.color,
                }}
              >
                {product.tagline}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111214] mb-4">
                {product.name}
              </h1>

              <p className="text-[#6D7278] text-lg mb-6">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F5B800] text-[#F5B800]"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6D7278]">4.8 (2,456 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-4xl font-bold text-[#111214]">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-[#6D7278] line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm text-[#4A9B5E] font-medium">
                    Save{' '}
                    {Math.round(
                      ((parseInt(product.originalPrice.replace(/[^0-9]/g, '')) -
                        parseInt(product.price.replace(/[^0-9]/g, ''))) /
                        parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) *
                        100
                    )}
                    %
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-[#111214]">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: product.color }}
                      />
                      <span className="text-sm text-[#6D7278]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutrition Quick View */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-[#F6F7FA] rounded-2xl">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-[#111214]">
                    {product.nutrition.protein}
                  </div>
                  <div className="text-xs text-[#6D7278]">Protein/100g</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="font-display text-2xl font-bold text-[#111214]">
                    {product.nutrition.fat}
                  </div>
                  <div className="text-xs text-[#6D7278]">Fat/100g</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-[#111214]">
                    {product.nutrition.calories}
                  </div>
                  <div className="text-xs text-[#6D7278]">Kcal/100g</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 text-base py-4"
                  style={{ backgroundColor: product.color }}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Buy on Amazon
                </a>
                <Link
                  to="/products"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Products
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-[#6D7278]">
                  <Truck className="w-4 h-4" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6D7278]">
                  <Shield className="w-4 h-4" />
                  FSSAI Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6D7278]">
                  <RotateCcw className="w-4 h-4" />
                  Easy Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section ref={detailsRef} className="py-12 lg:py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="product-details-content max-w-4xl">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#111214] mb-6">
              Product Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-[#111214] mb-3">Description</h3>
                <p className="text-[#6D7278] leading-relaxed">
                  {product.description} Made with 100% natural ingredients, this product 
                  is perfect for fitness enthusiasts, health-conscious individuals, and 
                  anyone looking for a nutritious addition to their diet. Add it to 
                  smoothies, shakes, oatmeal, or use it in your favorite recipes.
                </p>
              </div>

              {/* Usage */}
              <div>
                <h3 className="font-semibold text-[#111214] mb-3">How to Use</h3>
                <ul className="space-y-2 text-[#6D7278]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                    Add to smoothies and protein shakes
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                    Mix into oatmeal or yogurt
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                    Use in baking recipes
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                    Spread on toast or rice cakes
                  </li>
                </ul>
              </div>
            </div>

            {/* Storage */}
            <div className="mt-8 p-6 bg-[#F6F7FA] rounded-2xl">
              <h3 className="font-semibold text-[#111214] mb-2">Storage Instructions</h3>
              <p className="text-sm text-[#6D7278]">
                Store in a cool and dry place away from direct sunlight. Refrigerate after 
                opening to maintain freshness. Oil separation is a natural process and is a 
                sign of purity. Mix well before use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section ref={relatedRef} className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#111214]">
              You May Also Like
            </h2>
            <Link
              to="/products"
              className="text-sm text-[#2F6BFF] font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="related-product-item group"
              >
                <div className="product-card p-5 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-[#F6F7FA]">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span
                    className="text-xs font-medium mb-1"
                    style={{ color: related.color }}
                  >
                    {related.tagline}
                  </span>
                  <h3 className="font-semibold text-[#111214] mb-1">
                    {related.name}
                  </h3>
                  <p className="text-sm text-[#6D7278] mb-3 line-clamp-2">
                    {related.description}
                  </p>
                  <div className="mt-auto font-bold text-[#111214]">
                    {related.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
