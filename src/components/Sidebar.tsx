import { Link } from 'react-router-dom';
import { reviews, bestOfArticles } from '../data/mockData';
import { Newsletter } from './Newsletter';

export function Sidebar() {
  const latestPosts = [...reviews, ...bestOfArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <aside className="space-y-10 sticky top-24">
      <Newsletter variant="sidebar" />
      
      <div>
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6 border-b border-[#d2d2d7] pb-2">Latest Posts</h3>
        <div className="space-y-6">
          {latestPosts.map(post => {
            const isReview = 'rating' in post;
            const link = isReview ? `/review/${post.slug}` : `/blog/${post.slug}`;
            return (
              <Link key={post.id} to={link} className="flex gap-4 group">
                <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg" />
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
