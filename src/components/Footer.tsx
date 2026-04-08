import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Peanut Butter Powder', href: '/products' },
      { label: 'Natural Peanut Butter', href: '/products' },
      { label: 'All Products', href: '/products' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
    support: [
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-[#111214]">
                Trubite
              </span>
            </Link>
            <p className="mt-4 text-[#6D7278] text-sm leading-relaxed max-w-sm">
              Commit to Be Fit. Premium peanut butter and nutrition products made 
              with 100% natural ingredients. No additives, no preservatives—just pure goodness.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/trubite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F6F7FA] flex items-center justify-center text-[#111214] hover:bg-[#111214] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@trubite.in"
                className="w-10 h-10 rounded-full bg-[#F6F7FA] flex items-center justify-center text-[#111214] hover:bg-[#111214] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-[#111214] mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6D7278] hover:text-[#111214] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#111214] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6D7278] hover:text-[#111214] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-[#111214] mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#6D7278] hover:text-[#111214] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href="tel:+919316606518"
                className="flex items-center gap-2 text-sm text-[#6D7278] hover:text-[#111214] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 93166 06518
              </a>
              <a
                href="mailto:support@trubite.in"
                className="flex items-center gap-2 text-sm text-[#6D7278] hover:text-[#111214] transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@trubite.in
              </a>
              <span className="flex items-center gap-2 text-sm text-[#6D7278]">
                <MapPin className="w-4 h-4" />
                Gujarat, India
              </span>
            </div>
            
            <a
              href="https://amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2F6BFF] hover:underline"
            >
              Shop on Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-[#6D7278]">
              © {currentYear} Insight Food Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-xs text-[#6D7278] hover:text-[#111214] transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-[#6D7278] hover:text-[#111214] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
