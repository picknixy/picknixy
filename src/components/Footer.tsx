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
            <p className="mb-2">Your trusted source for expert product reviews and buying guides.</p>
            <a href="mailto:contact@picknixy.com" className="text-[#2997ff] hover:underline">contact@picknixy.com</a>
            <div className="mt-4 flex gap-3">
              <a href="https://www.pinterest.com/picknixy00/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z"/>
                </svg>
              </a>
            </div>
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
