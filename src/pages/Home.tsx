import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Star, Check, TrendingUp, Heart, Shield } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-product',
        { x: -100, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo(
        '.hero-title span',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.4 }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.7 }
      );

      gsap.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.9 }
      );

      // Scroll-triggered animations
      gsap.fromTo(
        '.featured-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.product-card-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.benefit-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.cta-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center pt-20 lg:pt-0"
      >
        {/* Gradient Orb */}
        <div className="gradient-orb gradient-orb-green left-[10%] top-[10%] w-[70vw] h-[70vh] opacity-60" />

        <div className="w-full px-6 lg:px-12 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Product Image */}
            <div className="hero-product relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
                <img
                  src="/images/61jHzkXjILL._AC_UF894,1000_QL80_.jpg"
                  alt="Trubite Peanut Butter Powder"
                  className="w-full h-full object-contain drop-shadow-2xl product-image-hover"
                />
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-[#4A9B5E] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Bestseller
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111214] leading-tight">
                <span className="inline-block">Commit</span>{' '}
                <span className="inline-block">to</span>{' '}
                <span className="inline-block">Be</span>{' '}
                <span className="inline-block text-[#4A9B5E]">Fit.</span>
              </div>

              <p className="hero-subtitle mt-6 text-lg lg:text-xl text-[#6D7278] max-w-md mx-auto lg:mx-0">
                Premium peanut butter powder with 87% less fat. Pure nutrition, 
                zero compromises.
              </p>

              <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop on Amazon
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-[#6D7278]">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B5E]" />
                  100% Natural
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B5E]" />
                  No Additives
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B5E]" />
                  Made in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredRef} className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
              Our Products
            </span>
            <h2 className="featured-title font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111214]">
              Fuel Your Day
            </h2>
            <p className="mt-4 text-[#6D7278] max-w-xl mx-auto">
              From protein-packed powders to creamy natural peanut butter, 
              find your perfect nutrition partner.
            </p>
          </div>

          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card-item group"
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
                    <span
                      className="text-xs font-medium mb-1"
                      style={{ color: product.color }}
                    >
                      {product.tagline}
                    </span>
                    <h3 className="font-semibold text-[#111214] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#6D7278] mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mt-auto flex items-center gap-2">
                      <span className="font-bold text-lg text-[#111214]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-[#6D7278] line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
              Why Trubite
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111214]">
              Experience Trubite, Experience Goodness
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'High in Protein',
                description: 'Up to 56g protein per 100g to fuel your active lifestyle.',
                color: '#4A9B5E',
              },
              {
                icon: Heart,
                title: 'Delicious Taste',
                description: 'Real peanut flavor without any artificial additives.',
                color: '#E85A9A',
              },
              {
                icon: Shield,
                title: 'Gluten Free & Vegan',
                description: 'Suitable for all dietary preferences and restrictions.',
                color: '#2A9D8F',
              },
              {
                icon: Check,
                title: 'Source of Fiber',
                description: 'Supports digestive health with natural dietary fiber.',
                color: '#F5B800',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="benefit-item text-center p-6 lg:p-8 rounded-3xl bg-[#F6F7FA] hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon
                    className="w-7 h-7"
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#111214] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#6D7278]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111214] via-[#1a1c20] to-[#111214]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(47,107,255,0.15),transparent_55%)]" />

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="cta-content max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Nutrition?
            </h2>
            <p className="text-lg text-[#B8BCC2] mb-8 max-w-xl mx-auto">
              Join thousands of fitness enthusiasts who have made Trubite their 
              daily nutrition partner. Shop now on Amazon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop on Amazon
              </a>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/20 rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                  50K+
                </div>
                <div className="text-sm text-[#B8BCC2] mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                  4.8
                </div>
                <div className="text-sm text-[#B8BCC2] mt-1">Average Rating</div>
              </div>
              <div>
                <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                  100%
                </div>
                <div className="text-sm text-[#B8BCC2] mt-1">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
