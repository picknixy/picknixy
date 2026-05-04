import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { reviews, bestOfArticles } from '../data/mockData';
import fallbackSvg from '../assets/images/fallback.svg';


export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = [...reviews, ...bestOfArticles].filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SEO title={`Search Results for "${query}"`} description={`Search results for ${query}`} noindex />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-[#1d1d1f] mb-8">
          Search results for "{query}"
        </h1>
        {searchResults.length === 0 ? (
          <p className="text-[#6e6e73]">No results found. Try a different search term.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {searchResults.map(item => {
              const isReview = 'rating' in item;
              const link = isReview ? `/${item.slug}` : `/blog/${item.slug}`;
              return (
                <div key={item.id} className="flex flex-col border border-[#d2d2d7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img  
                    src={item.image || fallbackSvg} 
                    alt={item.title} 
                    className="w-full h-48 object-cover flex-shrink-0" 
                    onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = fallbackSvg;
            }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                      <Link to={link} className="hover:text-[#2997ff] transition-colors">{item.title}</Link>
                    </h2>
                    <p className="text-[#6e6e73] text-sm mb-4 flex-grow">{item.excerpt}</p>
                    <Link to={link} className="text-[#2997ff] font-medium text-sm hover:underline">
                      Read more ›
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
