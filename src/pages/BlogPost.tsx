import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { bestOfArticles, authors, categories } from '../data/mockData';
import { ShareButtons } from '../components/ShareButtons';
import { Sidebar } from '../components/Sidebar';
import { RelatedArticles } from '../components/RelatedArticles';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = bestOfArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
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
        title={article.title} 
        description={article.excerpt}
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
              <img src={author?.avatar} alt={author?.name} className="w-8 h-8 rounded-full mr-2 object-cover" />
              <span className="font-medium text-gray-900">{author?.name}</span>
            </div>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
        </header>

        <ShareButtons url={window.location.href} title={article.title} />

        <img src={article.image} alt={article.title} className="w-full h-auto rounded-2xl mb-10 shadow-sm" />

        <div className="prose prose-lg max-w-[65ch] mx-auto prose-p:leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-[#2997ff] hover:prose-a:text-[#0071e3] mb-16 text-[#1d1d1f]">
          <p className="lead text-xl text-gray-600 mb-8">{article.excerpt}</p>
          {/* In a real app, this would render markdown or rich text */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2>Why this matters</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Top Picks</h3>
          <ul>
            <li>First item that is really great</li>
            <li>Second item that is also good</li>
            <li>Third item to consider</li>
          </ul>
          <p>For more information, check out our detailed reviews.</p>
        </div>


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
