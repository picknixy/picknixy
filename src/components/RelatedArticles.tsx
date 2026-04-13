import { Link } from 'react-router-dom';
import { reviews, bestOfArticles } from '../data/mockData';

export function RelatedArticles({ category, currentSlug }: { category: string, currentSlug: string }) {
  const related = [...reviews, ...bestOfArticles]
    .filter(item => item.category === category && item.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-[#d2d2d7]">
      <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map(item => {
          const isReview = 'rating' in item;
          const link = isReview ? `/review/${item.slug}` : `/blog/${item.slug}`;
          return (
            <Link key={item.id} to={link} className="group block">
              <div className="aspect-video overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.image || 'https://via.placeholder.com/400x225'} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x225';
                  }}
                />
              </div>
              <h4 className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors line-clamp-2">{item.title}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
