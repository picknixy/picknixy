import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { bestOfArticles, categories } from '../data/mockData';

export function Blog() {
  return (
    <>
      <SEO 
        title="Blog & Buying Guides" 
        description="Read our latest articles, buying guides, and 'best of' lists to help you make informed decisions."
      />
      
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Blog & Guides</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Expert advice, comparisons, and curated lists to help you find exactly what you need.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestOfArticles.map(article => (
            <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <Link to={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                <Link to={`/blog/${article.slug}`} className="text-blue-600 font-semibold text-sm hover:text-blue-800 mt-auto inline-flex items-center">
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
