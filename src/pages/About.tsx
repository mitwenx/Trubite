import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Target, Leaf, Award, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-hero-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.story-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.team-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Passion for Health',
      description:
        'We believe that good nutrition is the foundation of a healthy life. Every product we create is designed to support your wellness journey.',
      color: '#E85A9A',
    },
    {
      icon: Target,
      title: 'Uncompromising Quality',
      description:
        'From sourcing the finest peanuts to our manufacturing process, we maintain the highest standards at every step.',
      color: '#2F6BFF',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description:
        'No artificial additives, preservatives, or fillers. Just pure, natural ingredients that you can trust.',
      color: '#4A9B5E',
    },
    {
      icon: Award,
      title: 'FSSAI Certified',
      description:
        'All our products are FSSAI certified and undergo rigorous quality testing to ensure safety and purity.',
      color: '#F5B800',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 lg:py-24 relative overflow-hidden">
        {/* Gradient Orb */}
        <div className="gradient-orb gradient-orb-green right-[10%] top-[10%] w-[50vw] h-[50vh] opacity-50" />

        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="about-hero-content max-w-3xl">
            <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111214] mb-6">
              Our Story, Our Mission
            </h1>
            <p className="text-lg lg:text-xl text-[#6D7278] leading-relaxed">
              Trubite was born from a simple belief: that healthy eating should be 
              delicious, accessible, and honest. We're on a mission to transform 
              how India consumes peanut butter.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 lg:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="story-content grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F6F7FA]">
                <img
                  src="/images/71whq-qC4VL._AC_UF894,1000_QL80_.jpg"
                  alt="Trubite Products"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-white rounded-2xl shadow-xl p-6">
                <div className="font-display text-3xl font-bold text-[#4A9B5E]">
                  50K+
                </div>
                <div className="text-sm text-[#6D7278]">Happy Customers</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111214] mb-6">
                From Gujarat to Your Table
              </h2>
              <div className="space-y-4 text-[#6D7278] leading-relaxed">
                <p>
                  Founded in the heart of Gujarat—India's peanut belt—Trubite began 
                  with a simple question: why can't healthy food taste amazing?
                </p>
                <p>
                  We started small, sourcing the finest roasted peanuts from local 
                  farmers and perfecting our recipes in a tiny kitchen. Our first 
                  product, the Unsweetened Peanut Butter Powder, was an instant hit 
                  among fitness enthusiasts who loved the high protein content and 
                  low fat profile.
                </p>
                <p>
                  Today, Trubite has grown into a trusted brand across India, but our 
                  values remain the same. We still work with the same farmer cooperatives, 
                  we still test every batch for quality, and we still believe that 
                  transparency is the most important ingredient.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-[#111214] mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#F6F7FA] rounded-full">
                    <Award className="w-4 h-4 text-[#4A9B5E]" />
                    <span className="text-sm font-medium">FSSAI Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#F6F7FA] rounded-full">
                    <Leaf className="w-4 h-4 text-[#4A9B5E]" />
                    <span className="text-sm font-medium">100% Vegan</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#F6F7FA] rounded-full">
                    <Heart className="w-4 h-4 text-[#4A9B5E]" />
                    <span className="text-sm font-medium">Gluten Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111214]">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card p-6 lg:p-8 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon
                    className="w-7 h-7"
                    style={{ color: value.color }}
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#111214] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6D7278] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <span className="font-mono-accent text-[#2F6BFF] mb-4 block">
                Manufacturing
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111214] mb-6">
                Made with Care in India
              </h2>
              <div className="space-y-4 text-[#6D7278] leading-relaxed">
                <p>
                  Our state-of-the-art manufacturing facility in Gujarat follows 
                  strict quality control protocols. From raw material inspection to 
                  final packaging, every step is monitored to ensure you get the 
                  best product possible.
                </p>
                <p>
                  We use a proprietary process that preserves the natural nutrients 
                  while creating that smooth, delicious texture you love. Our peanut 
                  butter powder is made through a gentle pressing process that removes 
                  excess oil while retaining the protein and flavor.
                </p>
              </div>

              {/* Process Steps */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Sourcing',
                  'Roasting',
                  'Grinding',
                  'Quality Check',
                  'Packaging',
                  'Delivery',
                ].map((step, idx) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#4A9B5E] text-white flex items-center justify-center text-sm font-medium">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-[#111214]">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#F6F7FA]">
                <img
                  src="/images/71nm5kE99OL._AC_UF894,1000_QL80_.jpg"
                  alt="Manufacturing Process"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Contact Section */}
      <section ref={teamRef} className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="team-content max-w-4xl mx-auto text-center">
            <Users className="w-12 h-12 text-[#2F6BFF] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111214] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-[#6D7278] mb-8 max-w-2xl mx-auto">
              Have questions about our products, ingredients, or just want to say hello? 
              We'd love to hear from you. Our team is always here to help.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#F6F7FA] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-[#111214]" />
                </div>
                <h3 className="font-semibold text-[#111214] mb-2">Address</h3>
                <p className="text-sm text-[#6D7278]">
                  Insight Food Private Limited<br />
                  Deesa, Gujarat, India<br />
                  PIN: 385535
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#F6F7FA] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#111214]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#111214] mb-2">Phone</h3>
                <p className="text-sm text-[#6D7278]">
                  <a href="tel:+919316606518" className="hover:text-[#2F6BFF] transition-colors">
                    +91 93166 06518
                  </a>
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#F6F7FA] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#111214]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#111214] mb-2">Email</h3>
                <p className="text-sm text-[#6D7278]">
                  <a href="mailto:support@trubite.in" className="hover:text-[#2F6BFF] transition-colors">
                    support@trubite.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
