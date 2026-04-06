import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '../data/mockData';

const PicknixyLogo = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
    <path d="M10 4h7.5c4.1 0 7.5 3.4 7.5 7.5S21.6 19 17.5 19H14v9h-4V4zm4 11h3.5c1.9 0 3.5-1.6 3.5-3.5S19.4 8 17.5 8H14v7z" />
    <circle cx="24" cy="24" r="4" />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1f]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-[#f5f5f7] hover:text-white transition-colors flex items-center gap-2" aria-label="Picknixy Home">
              <PicknixyLogo />
              <span className="font-semibold tracking-tight text-sm hidden sm:block">Picknixy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide h-full">
            {categories.slice(0, 4).map((category) => (
              <div key={category.id} className="relative group h-full flex items-center">
                <Link
                  to={`/category/${category.slug}`}
                  className="text-[#f5f5f7]/80 hover:text-white transition-colors py-4"
                >
                  {category.name}
                </Link>
                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 rounded-xl shadow-2xl bg-[#1d1d1f]/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                    <div className="py-2" role="menu" aria-orientation="vertical">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/category/${category.slug}`}
                          className="block px-4 py-2 text-xs text-[#f5f5f7]/80 hover:text-white hover:bg-white/10 transition-colors"
                          role="menuitem"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/blog" className="text-[#f5f5f7]/80 hover:text-white transition-colors py-4">
              Blog
            </Link>
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-[#f5f5f7]/80 hover:text-white transition-colors" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              className="md:hidden text-[#f5f5f7]/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-12 left-0 right-0 bg-[#1d1d1f] border-b border-white/10 p-4 z-40">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6e6e73]" />
            <input 
              type="text" 
              autoFocus
              placeholder="Search reviews, guides, and more..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2d2d2f] text-white rounded-full py-3 pl-10 pr-10 outline-none focus:ring-2 focus:ring-[#2997ff] transition-all"
            />
            <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e73] hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1d1d1f] absolute top-12 left-0 right-0 h-screen overflow-y-auto px-6 py-4 pb-24">
          <div className="space-y-1">
            {categories.map((category) => (
              <div key={category.id} className="border-b border-white/10 py-3">
                <Link
                  to={`/category/${category.slug}`}
                  className="block text-lg font-semibold text-[#f5f5f7]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="mt-3 pl-4 space-y-3 border-l border-white/10 ml-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        to={`/category/${category.slug}`}
                        className="block text-sm text-[#f5f5f7]/70 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-b border-white/10 py-3">
              <Link
                to="/blog"
                className="block text-lg font-semibold text-[#f5f5f7]"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
            <div className="border-b border-white/10 py-3">
              <Link
                to="/about"
                className="block text-lg font-semibold text-[#f5f5f7]"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
