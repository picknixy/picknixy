import { Link } from 'react-router-dom';

const PicknixyLogo = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
    <path d="M10 4h7.5c4.1 0 7.5 3.4 7.5 7.5S21.6 19 17.5 19H14v9h-4V4zm4 11h3.5c1.9 0 3.5-1.6 3.5-3.5S19.4 8 17.5 8H14v7z" />
    <circle cx="24" cy="24" r="4" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] py-12 mt-auto text-xs">
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-b border-[#d2d2d7] pb-8 mb-8">
          <p className="mb-2">
            Disclaimer: We may earn a commission when you buy through links on our site. This does not affect our reviews or comparisons.
          </p>
          <p>
            Prices and availability are subject to change. Picknixy is a participant in various affiliate programs designed to provide a means for sites to earn advertising fees by advertising and linking to partner sites.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/health-fitness" className="hover:text-[#1d1d1f] transition-colors">Health & Fitness</Link></li>
              <li><Link to="/category/software-tools" className="hover:text-[#1d1d1f] transition-colors">Software & Tools</Link></li>
              <li><Link to="/category/self-help" className="hover:text-[#1d1d1f] transition-colors">Self-Help</Link></li>
              <li><Link to="/category/spiritual" className="hover:text-[#1d1d1f] transition-colors">Spiritual</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#1d1d1f] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#1d1d1f] transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#1d1d1f] transition-colors">Affiliate Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-[#1d1d1f] font-semibold mb-3">
              <PicknixyLogo /> Picknixy
            </div>
            <p>Your trusted source for expert product reviews and buying guides.</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © {new Date().getFullYear()} Picknixy Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link to="/terms" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link to="/contact" className="hover:text-[#1d1d1f] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
