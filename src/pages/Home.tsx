import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { reviews, bestOfArticles } from '../data/mockData';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  const featuredReview = reviews[0];
  const secondReview = reviews[1];
  const gridItems = [...reviews.slice(2), ...bestOfArticles];

  return (
    <>
      <SEO 
        title="Expert Product Reviews & Buying Guides" 
        description="Discover the best products across health, software, self-help, and more. Read our expert, unbiased reviews, buying guides, and comparisons before you buy."
        keywords="product reviews, buying guides, expert reviews, software reviews, health product reviews, self-help guides, unbiased reviews, Picknixy"
        canonicalUrl="https://picknixy.com"
        type="website"
        image={featuredReview.image}
      />
      
      {/* Hero 1 (Dark) */}
      <section className="relative h-[75vh] md:h-[85vh] w-full bg-black overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0">
          <img  
            src={featuredReview.image || '/images/fallback.svg'} 
            alt={featuredReview.title} 
            className="w-full h-full object-cover opacity-70" 
            loading="eager" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback.svg';
            }}
          />
        </div>
        <div className="relative z-10 mt-16 md:mt-24 px-4 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-2 drop-shadow-lg">{featuredReview.title}</h2>
          <p className="text-xl md:text-3xl font-normal tracking-tight mb-4 max-w-2xl mx-auto drop-shadow-md">{featuredReview.excerpt}</p>
          <div className="flex justify-center gap-6 text-lg md:text-xl font-medium mt-4">
            <Link to={`/review/${featuredReview.slug}`} className="text-[#2997ff] hover:underline flex items-center">
              Read review <span className="ml-1 text-sm">›</span>
            </Link>
            <a href={featuredReview.affiliateLink} className="text-[#2997ff] hover:underline flex items-center">
              Check price <span className="ml-1 text-sm">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hero 2 (Light) */}
      <section className="relative h-[75vh] md:h-[85vh] w-full bg-[#f5f5f7] overflow-hidden flex flex-col items-center mt-3">
        <div className="absolute inset-0">
          <img  
            src={secondReview.image || '/images/fallback.svg'} 
            alt={secondReview.title} 
            className="w-full h-full object-cover opacity-90" 
            loading="lazy" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback.svg';
            }}
          />
        </div>
        <div className="relative z-10 mt-16 md:mt-24 px-4 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-2 drop-shadow-lg">{secondReview.title}</h2>
          <p className="text-xl md:text-3xl font-normal tracking-tight mb-4 max-w-2xl mx-auto drop-shadow-md">{secondReview.excerpt}</p>
          <div className="flex justify-center gap-6 text-lg md:text-xl font-medium mt-4">
            <Link to={`/review/${secondReview.slug}`} className="text-[#2997ff] hover:underline flex items-center">
              Read review <span className="ml-1 text-sm">›</span>
            </Link>
            <a href={secondReview.affiliateLink} className="text-[#2997ff] hover:underline flex items-center">
              Check price <span className="ml-1 text-sm">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-[2560px] mx-auto px-3 mt-3 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {gridItems.map((item, idx) => {
            const isReview = 'rating' in item;
            const link = isReview ? `/review/${item.slug}` : `/blog/${item.slug}`;
            
            return (
              <div key={item.id} className="relative h-[500px] md:h-[600px] bg-black overflow-hidden flex flex-col items-center group">
                <div className="absolute inset-0">
                  <img  
                    src={item.image || '/images/fallback.svg'} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                    onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback.svg';
            }}
                  />
                </div>
                <div className="relative z-10 mt-12 px-8 text-center text-white w-full">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-lg md:text-xl font-normal tracking-tight mb-4 max-w-md mx-auto line-clamp-2 drop-shadow-md">{item.excerpt}</p>
                  <div className="flex justify-center gap-6 text-lg font-medium mt-2">
                    <Link to={link} className="text-[#2997ff] hover:underline flex items-center">
                      {isReview ? 'Read review' : 'Read guide'} <span className="ml-1 text-sm">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
