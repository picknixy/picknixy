import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { categories, reviews, bestOfArticles } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  
  let category: any = categories.find(c => c.slug === slug);
  let parentCategory: any = null;

  if (!category) {
    for (const cat of categories) {
      const sub = cat.subcategories?.find(s => s.slug === slug);
      if (sub) {
        category = { 
          ...sub, 
          description: `Explore our latest reviews and guides for ${sub.name}.`,
          subcategories: [] 
        };
        parentCategory = cat;
        break;
      }
    }
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <SEO title="Category Not Found" description="The requested category could not be found." noindex />
        <h1 className="text-3xl font-bold text-gray-900">Category Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const categoryReviews = reviews.filter(r => r.category === category.id);
  const categoryArticles = bestOfArticles.filter(a => a.category === category.id);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = categoryReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(categoryReviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <SEO 
        title={`${category.name} Reviews & Guides`} 
        description={category.description}
      />
      
      <div className="bg-[#f5f5f7] text-[#1d1d1f] py-16 border-b border-[#d2d2d7]">
        <div className="max-w-5xl mx-auto px-4">
          {parentCategory && (
            <div className="mb-4">
              <Link to={`/category/${parentCategory.slug}`} className="text-[#2997ff] hover:underline text-sm font-medium flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                Back to {parentCategory.name}
              </Link>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{category.name}</h1>
          <p className="text-xl text-[#6e6e73] max-w-2xl mb-8">{category.description}</p>
          
          {category.subcategories && category.subcategories.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">Subcategories</h3>
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map(sub => (
                  <Link 
                    key={sub.id} 
                    to={`/category/${sub.slug}`}
                    className="px-4 py-2 bg-white border border-[#d2d2d7] rounded-full text-sm font-medium text-[#1d1d1f] hover:border-[#1d1d1f] transition-colors cursor-pointer"
                  >
                    {sub.name}
                  </Link>
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
                {currentReviews.map(review => (
                  <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
                    <div className="sm:w-1/3 flex-shrink-0">
                      <img referrerPolicy="no-referrer" 
                        src={review.image || '/images/fallback.svg'} 
                        alt={review.title} 
                        className="w-full h-48 sm:h-full object-cover" 
                        loading="lazy" 
                        onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback.svg';
            }}
                      />
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

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === i + 1
                            ? 'bg-[#2997ff] text-white border border-[#2997ff]'
                            : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
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
