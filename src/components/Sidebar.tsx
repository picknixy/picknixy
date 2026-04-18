import { Link } from 'react-router-dom';
import { reviews, bestOfArticles, authors } from '../data/mockData';
import { Newsletter } from './Newsletter';

export function Sidebar() {
  const latestPosts = [...reviews, ...bestOfArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const author = authors.picknixy;

  return (
    <aside className="space-y-10 sticky top-24">
      {/* Author Widget */}
      <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
        <img  
          src={author.avatar || '/images/avatar-fallback.svg?v=2'} 
          alt={author.name} 
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover flex-shrink-0" 
          onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/avatar-fallback.svg?v=2';
            }}
        />
        <h3 className="text-lg font-bold text-[#1d1d1f] mb-1">{author.name}</h3>
        <p className="text-sm text-[#2997ff] font-medium mb-3">{author.role}</p>
        <p className="text-sm text-[#6e6e73]">{author.bio}</p>
      </div>

      <Newsletter variant="sidebar" />
      
      <div>
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6 border-b border-[#d2d2d7] pb-2">Latest Posts</h3>
        <div className="space-y-6">
          {latestPosts.map(post => {
            const isReview = 'rating' in post;
            const link = isReview ? `/review/${post.slug}` : `/blog/${post.slug}`;
            return (
              <Link key={post.id} to={link} className="flex gap-4 group items-start">
                <img  
                  src={post.image || '/images/fallback.svg?v=2'} 
                  alt={post.title} 
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0" 
                  onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback.svg?v=2';
            }}
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors line-clamp-2 mb-1">{post.title}</h4>
                  <p className="text-xs text-[#6e6e73]">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
