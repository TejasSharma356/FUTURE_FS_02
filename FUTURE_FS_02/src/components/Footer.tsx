import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
              LUXE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Curating the finest in luxury goods since 2024. Exceptional quality, timeless design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/products?category=luxury-accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
              <li><Link to="/products?category=fashion-apparel" className="hover:text-foreground transition-colors">Fashion</Link></li>
              <li><Link to="/products?category=electronics" className="hover:text-foreground transition-colors">Electronics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><span className="cursor-default">About Us</span></li>
              <li><span className="cursor-default">Careers</span></li>
              <li><span className="cursor-default">Press</span></li>
              <li><span className="cursor-default">Sustainability</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">FAQ</span></li>
              <li><span className="cursor-default">Size Guide</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LUXE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="cursor-default hover:text-foreground transition-colors">Privacy Policy</span>
            <span className="cursor-default hover:text-foreground transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
