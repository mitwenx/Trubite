import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, X, Home, Package, Info } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/about', label: 'About Us', icon: Info },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 lg:hidden mobile-menu ${
          isOpen ? 'mobile-menu-open' : ''
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-display text-xl font-bold text-[#111214]">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-4 px-6 py-4 transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#2F6BFF]/5 text-[#2F6BFF]'
                      : 'text-[#111214] hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-gray-100">
            <a
              href="https://amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop on Amazon
            </a>
            <p className="text-center text-xs text-[#6D7278] mt-4">
              Free shipping on orders over ₹500
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
