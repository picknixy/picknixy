import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { categories, reviews, bestOfArticles } from '../data/mockData';
import { Star } from 'lucide-react';

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Category Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const categoryReviews = reviews.filter(r => r.category === category.id);
  const categoryArticles = bestOfArticles.filter(a => a.category === category.id);

  return (
    <>
      <SEO 
        title={`${category.name} Reviews & Guides`} 
        description={category.description}
      />
      
      <div className="bg-[#f5f5f7] text-[#1d1d1f] py-16 border-b border-[#d2d2d7]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{category.name}</h1>
          <p className="text-xl text-[#6e6e73] max-w-2xl mb-8">{category.description}</p>
          
          {category.subcategories && category.subcategories.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Subcategories</h3>
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map(sub => (
                  <span 
                    key={sub.id} 
                    className="px-4 py-2 bg-white border border-[#d2d2d7] rounded-full text-sm font-medium text-[#1d1d1f] hover:border-[#1d1d1f] transition-colors cursor-pointer"
                  >
                    {sub.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">In-Depth Reviews</h2>
            {categoryReviews.length > 0 ? (
              <div className="space-y-8">
                {categoryReviews.map(review => (
                  <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
                    <div className="sm:w-1/3">
                      <img src={review.image} alt={review.title} className="w-full h-48 sm:h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{review.rating}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/review/${review.slug}`} className="hover:text-blue-600 transition-colors">
                          {review.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{review.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews found in this category yet.</p>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Guides & Best Of</h2>
            {categoryArticles.length > 0 ? (
              <div className="space-y-6">
                {categoryArticles.map(article => (
                  <div key={article.id} className="group">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      <Link to={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No guides found in this category yet.</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
