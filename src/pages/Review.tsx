import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { reviews, authors, categories } from '../data/mockData';
import { Star, Check, X, ArrowRight } from 'lucide-react';
import { ShareButtons } from '../components/ShareButtons';
import { UserRating } from '../components/UserRating';
import { Comments } from '../components/Comments';
import { Sidebar } from '../components/Sidebar';
import { RelatedArticles } from '../components/RelatedArticles';

export function Review() {
  const { slug } = useParams<{ slug: string }>();
  const review = reviews.find(r => r.slug === slug);

  if (!review) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Review Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const author = authors[review.author as keyof typeof authors];
  const category = categories.find(c => c.id === review.category);

  return (
    <>
      <SEO 
        title={review.title} 
        description={review.excerpt}
        type="Review"
        image={review.image}
        author={author?.name}
        datePublished={review.date}
        ratingValue={review.rating}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link to={`/category/${category?.slug}`} className="hover:text-gray-900">{category?.name}</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-900 truncate max-w-[200px]">{review.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article>
              {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            {review.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-6 gap-4">
            <div className="flex items-center space-x-4">
              <img src={author?.avatar} alt={author?.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-900">{author?.name}</p>
                <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="font-bold text-gray-900">{review.rating}/5</span>
            </div>
          </div>
        </header>

        <ShareButtons url={window.location.href} title={review.title} />

        {/* Affiliate Disclosure */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 text-sm text-blue-800">
          <strong>Disclosure:</strong> We may earn a commission if you purchase through our links, at no extra cost to you. This helps support our independent reviews.
        </div>

        {/* Featured Image */}
        <img src={review.image} alt={review.title} className="w-full h-auto rounded-2xl mb-10 shadow-sm" />

        <UserRating expertRating={review.rating} />

        {/* Quick Summary Box */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <Check className="w-5 h-5 mr-2" /> Pros
              </h3>
              <ul className="space-y-2">
                {review.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                <X className="w-5 h-5 mr-2" /> Cons
              </h3>
              <ul className="space-y-2">
                {review.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <span className="block text-sm text-gray-500">Price</span>
              <span className="text-xl font-bold text-gray-900">{review.price}</span>
            </div>
            <a 
              href={review.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Check Current Price <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-[65ch] mx-auto prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-[#2997ff] hover:prose-a:text-[#0071e3] mb-16 text-[#1d1d1f]"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />

        {/* Bottom CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to try it out?</h2>
          <p className="text-gray-300 mb-6">Support our work by using our verified partner link below.</p>
          <a 
            href={review.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View on Official Site <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

              {/* Author Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img src={author?.avatar} alt={author?.name} className="w-24 h-24 rounded-full object-cover" />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{author?.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{author?.role}</p>
                  <p className="text-gray-600 text-sm">{author?.bio}</p>
                </div>
              </div>

              <Comments />
            </article>

            <RelatedArticles category={review.category} currentSlug={review.slug} />
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
