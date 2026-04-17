import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { bestOfArticles, authors, categories } from '../data/mockData';
import { ShareButtons } from '../components/ShareButtons';
import { TableOfContents } from '../components/TableOfContents';
import { Comments } from '../components/Comments';
import { Sidebar } from '../components/Sidebar';
import { RelatedArticles } from '../components/RelatedArticles';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = bestOfArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <SEO title="Article Not Found" description="The requested article could not be found." noindex />
        <h1 className="text-3xl font-bold text-gray-900">Article Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">Return to Blog</Link>
      </div>
    );
  }

  const author = authors[article.author as keyof typeof authors];
  const category = categories.find(c => c.id === article.category);

  return (
    <>
      <SEO 
        title={article.seoTitle || article.title} 
        description={article.seoDescription || article.excerpt}
        keywords={article.seoKeywords}
        canonicalUrl={article.canonicalUrl}
        type="article"
        image={article.image}
        author={author?.name}
        datePublished={article.date}
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
                <Link to="/blog" className="hover:text-gray-900">Blog</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-900 truncate max-w-[200px]">{article.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article>
              <header className="mb-10 text-center">
          <Link to={`/category/${category?.slug}`} className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 inline-block">
            {category?.name}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <img referrerPolicy="no-referrer" 
                src={author?.avatar || 'https://placehold.co/150'} 
                alt={author?.name} 
                className="w-8 h-8 rounded-full mr-2 object-cover flex-shrink-0" 
                onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/150';
            }}
              />
              <span className="font-medium text-gray-900">{author?.name}</span>
            </div>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
        </header>

        <ShareButtons url={window.location.href} title={article.title} />

        <img referrerPolicy="no-referrer" 
          src={article.image || 'https://placehold.co/1200x600'} 
          alt={article.title} 
          className="w-full h-auto rounded-2xl mb-10 shadow-sm object-cover" 
          onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/1200x600';
            }}
        />

        <TableOfContents />

        <div 
          className="prose prose-lg max-w-[65ch] mx-auto prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-[#2997ff] hover:prose-a:text-[#0071e3] mb-16 text-[#1d1d1f]"
          dangerouslySetInnerHTML={{ __html: `<p class="lead text-xl text-gray-600 mb-8">${article.excerpt}</p>` + article.content }}
        />

        {/* Medical / General Disclaimer for AdSense Compliance */}
        <div className="max-w-[65ch] mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 mb-16 text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-2">Important Disclaimer:</p>
          <p>
            The information provided in this article is for educational and informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before starting any new diet, exercise program, or dietary supplement. Individual results may vary.
          </p>
        </div>

        <Comments />
            </article>

            <RelatedArticles category={article.category} currentSlug={article.slug} />
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
