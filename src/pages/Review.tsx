import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { reviews, authors, categories } from '../data/mockData';
import { Star, Check, X, ArrowRight } from 'lucide-react';
import { ShareButtons } from '../components/ShareButtons';
import { UserRating } from '../components/UserRating';
import { TableOfContents } from '../components/TableOfContents';
import { Comments } from '../components/Comments';
import { Sidebar } from '../components/Sidebar';
import { RelatedArticles } from '../components/RelatedArticles';
import fallbackSvg from '../assets/images/fallback.svg';
import avatarFallbackSvg from '../assets/images/avatar-fallback.svg';


export function Review() {
  const { slug } = useParams<{ slug: string }>();
  const review = reviews.find(r => r.slug === slug);

  if (!review) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <SEO title="Review Not Found" description="The requested review could not be found." noindex />
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
        title={review.seoTitle || review.title} 
        description={review.seoDescription || review.excerpt}
        keywords={review.seoKeywords}
        canonicalUrl={review.canonicalUrl}
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
              <img  
                src={author?.avatar || avatarFallbackSvg} 
                alt={author?.name} 
                className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = avatarFallbackSvg;
            }}
              />
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


        {/* Editorial Disclosure */}
        <div className="flex items-center gap-4 bg-[#f5f5f7] rounded-xl p-5 mb-8 text-sm text-gray-700 border border-[#d2d2d7]/50">
          <div className="flex-shrink-0 w-10 h-10 bg-[#2997ff]/10 rounded-full flex items-center justify-center text-[#2997ff]">
            <Check className="w-5 h-5" />
          </div>
          <p>
            <strong>Editorial Independence:</strong> This review is based on our independent research and analysis. Our primary goal is to provide unbiased information to help you make the best decision. We may earn a commission if you purchase through our links, at no extra cost to you.
          </p>
        </div>

        {/* Featured Image */}
        <img  
          src={review.image || fallbackSvg} 
          alt={review.title} 
          className="w-full h-auto rounded-2xl mb-10 shadow-sm object-cover" 
          onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = fallbackSvg;
            }}
        />

        <UserRating expertRating={review.rating} />

        {/* Quick Summary Box */}
        {(review.pros?.length > 0 || review.cons?.length > 0) && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Editorial Analysis</h2>
            <span className="text-sm text-gray-500 mt-2 sm:mt-0 font-medium bg-gray-100 px-3 py-1 rounded-full">Tested & Reviewed</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <Check className="w-5 h-5 mr-2" /> Pros
              </h3>
              <ul className="space-y-2">
                {(review.pros || []).map((pro, idx) => (
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
                {(review.cons || []).map((con, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
        )}

        <TableOfContents />

        {/* Content */}
        <div 
          className="prose prose-lg max-w-[65ch] mx-auto prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-[#2997ff] hover:prose-a:text-[#0071e3] mb-12 text-[#1d1d1f]"
          dangerouslySetInnerHTML={{ __html: review.content.replace(/<table/gi, '<div class="overflow-x-auto"><table').replace(/<\/table>/gi, '</table></div>') }}
        />

        {/* Medical / General Disclaimer for AdSense Compliance */}
        <div className="max-w-[65ch] mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 mb-16 text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-2">Important Disclaimer:</p>
          <p>
            The information provided in this review is for educational and informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before starting any new diet, exercise program, or dietary supplement. Individual results may vary, and no guarantees are made regarding the efficacy of the products mentioned.
          </p>
        </div>

        {/* Final Verdict */}
        <div className="bg-[#f5f5f7] border border-[#d2d2d7] rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Final Verdict</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Based on our comprehensive editorial review, {review.title.replace(' Review', '').replace(/ \d{4}.*/, '')} offers a solid solution for those looking to address their specific needs. As an independent publisher, our goal is to provide you with objective analysis so you can make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#d2d2d7]/60">
            <span className="text-gray-600 font-medium mb-4 sm:mb-0">
              Editorial Rating: <span className="text-gray-900 font-bold">{review.rating}/5</span>
            </span>
            <a 
              href={review.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#2997ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0071e3] transition-colors"
            >
              Check Price & Availability <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        <ShareButtons url={window.location.href} title={review.title} />

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
