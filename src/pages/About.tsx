import { SEO } from '../components/SEO';
import { authors } from '../data/mockData';

export function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Picknixy, our mission, and our team of expert reviewers."
      />
      
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">About Picknixy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our mission is to help you make smarter purchasing decisions through honest, expert-driven reviews.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-blue max-w-none mb-16">
          <h2>Who We Are</h2>
          <p>Founded in 2024, Picknixy was built out of frustration with the current state of online reviews. Too many sites prioritize quick affiliate commissions over genuine testing and honest feedback.</p>
          <p>We do things differently. Our team consists of industry experts who actually buy, use, and test the products we recommend. We don't just read spec sheets; we live with the products.</p>
          
          <h2>Our Review Process</h2>
          <ul>
            <li><strong>Independent Purchasing:</strong> We buy the majority of products we test to avoid manufacturer bias.</li>
            <li><strong>Rigorous Testing:</strong> Products are tested in real-world scenarios for weeks, not hours.</li>
            <li><strong>Expert Analysis:</strong> Our writers have deep domain expertise in their respective categories.</li>
            <li><strong>Continuous Updates:</strong> We regularly update our reviews to reflect software updates, long-term durability, and new competitors.</li>
          </ul>

          <h2>How We Make Money</h2>
          <p>Picknixy is reader-supported. When you buy through links on our site, we may earn an affiliate commission. However, this does not impact our reviews or comparisons. We only recommend products we genuinely believe are the best in their category. If a product is bad, we will tell you.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Expert</h2>
        <div className="max-w-md mx-auto">
          {Object.values(authors).map(author => (
            <div key={author.id} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              <img referrerPolicy="no-referrer" 
                src={author.avatar || 'https://placehold.co/150'} 
                alt={author.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/150';
            }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{author.name}</h3>
              <p className="text-md text-blue-600 font-medium mb-4">{author.role}</p>
              <p className="text-gray-600">{author.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
