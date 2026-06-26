import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { reviews, categories } from "../data/mockData";
import fallbackSvg from "../assets/images/fallback.svg";
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export function Home() {
  const featuredReviews = reviews.slice(0, 3);
  const latestReviews = reviews.slice(3, 9);

  return (
    <>
      <SEO
        title="Honest Product Reviews, Comparisons & Buying Guides | Picknixy"
        description="Picknixy publishes independent reviews, comparisons, and buying guides across multiple categories to help you make informed purchasing decisions."
        keywords="product reviews, buying guides, expert reviews, comparisons, unbiased reviews, Picknixy"
        canonicalUrl="https://www.picknixy.com/"
        type="website"
      />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#1d1d1f] to-[#000000] text-white pt-32 pb-24 px-4 md:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-sm">
            Honest Product Reviews, Comparisons & Buying Guides
          </h1>
          <p className="text-lg md:text-2xl text-[#a1a1a6] mb-10 max-w-3xl mx-auto leading-relaxed">
            Picknixy publishes independent reviews, comprehensive comparisons, and expert buying guides across health, relationships, and self-help categories to help you make informed, confident decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#featured-reviews" className="bg-[#2997ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0071e3] transition-colors flex items-center justify-center">
              Read Our Latest Reviews <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#categories" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center">
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* 2. Browse Categories */}
      <section id="categories" className="py-20 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-4">Browse by Category</h2>
            <p className="text-[#86868b] text-lg max-w-2xl mx-auto">Explore our deeply researched guides categorized to help you find exactly what you're looking for.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((cat) => (
              <Link key={cat.id} to={`/category/${cat.slug}`} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-[#d2d2d7]/50 group">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 group-hover:text-[#2997ff] transition-colors">{cat.name}</h3>
                <p className="text-[#86868b] text-sm mb-4 line-clamp-2">{cat.description}</p>
                <span className="text-[#2997ff] font-medium text-sm flex items-center justify-center">Explore <ArrowRight className="w-4 h-4 ml-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Reviews */}
      <section id="featured-reviews" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-4">Featured Reviews</h2>
              <p className="text-[#86868b] text-lg max-w-2xl">Our most comprehensive and popular product deep-dives.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <Link key={review.id} to={`/${review.slug}`} className="group flex flex-col h-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#f5f5f7]">
                  <img src={review.image || fallbackSvg} alt={review.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-xs font-bold text-[#2997ff] uppercase tracking-wider mb-2">{review.category}</span>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 group-hover:text-[#2997ff] transition-colors">{review.title}</h3>
                  <p className="text-[#86868b] line-clamp-3 mb-4">{review.excerpt}</p>
                  <div className="mt-auto flex items-center text-[#1d1d1f] font-semibold text-sm">
                    Read Full Review <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Reviews */}
      <section className="py-20 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-10 text-center">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map((review) => (
              <Link key={review.id} to={`/${review.slug}`} className="bg-white rounded-2xl p-5 flex gap-5 hover:shadow-md transition-shadow border border-[#d2d2d7]/50 group">
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#f5f5f7]">
                  <img src={review.image || fallbackSvg} alt={review.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-[#1d1d1f] mb-2 line-clamp-2 group-hover:text-[#2997ff] transition-colors">{review.title}</h3>
                  <span className="text-xs text-[#86868b]">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. All Reviews */}
      <section className="py-20 px-4 md:px-8 bg-white border-y border-[#d2d2d7]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-6">Looking for More?</h2>
          <p className="text-[#86868b] text-lg mb-10">Browse our complete collection of deeply researched product reviews, buying guides, and comparisons.</p>
          <Link to="/reviews" className="inline-flex items-center justify-center bg-[#2997ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0071e3] transition-colors">
            View All Reviews <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 5. Popular Comparisons */}
      <section className="py-20 px-4 md:px-8 bg-white border-y border-[#d2d2d7]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-6">Popular Comparisons</h2>
          <p className="text-[#86868b] text-lg mb-10">Not sure which product is right for you? We stack the top contenders head-to-head.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Placeholder comparison cards since data might not have explicit comparisons */}
            <Link to="/comparisons" className="bg-[#f5f5f7] p-6 rounded-2xl hover:bg-[#e8e8ed] transition-colors flex items-center justify-between group">
               <span className="font-bold text-[#1d1d1f]">Top Diet Plans: Which Works Best?</span>
               <ArrowRight className="text-[#86868b] group-hover:text-[#2997ff] transition-colors" />
            </Link>
            <Link to="/comparisons" className="bg-[#f5f5f7] p-6 rounded-2xl hover:bg-[#e8e8ed] transition-colors flex items-center justify-between group">
               <span className="font-bold text-[#1d1d1f]">Dental Supplements Head-to-Head</span>
               <ArrowRight className="text-[#86868b] group-hover:text-[#2997ff] transition-colors" />
            </Link>
          </div>
          <div className="mt-8">
            <Link to="/comparisons" className="text-[#2997ff] font-semibold hover:underline">View All Comparisons</Link>
          </div>
        </div>
      </section>

      {/* 6. How We Review Products */}
      <section className="py-20 px-4 md:px-8 bg-[#1d1d1f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Review Products</h2>
            <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto">Our editorial process ensures that every review is unbiased, factual, and helpful.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
             <div>
               <div className="w-16 h-16 bg-[#2d2d2f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2997ff]">
                 <ShieldCheck className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Independent Analysis</h3>
               <p className="text-[#a1a1a6]">We do not accept paid sponsorships for positive reviews. Our evaluations are entirely based on our own research and analysis.</p>
             </div>
             <div>
               <div className="w-16 h-16 bg-[#2d2d2f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2997ff]">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Evidence-Based</h3>
               <p className="text-[#a1a1a6]">We cross-reference product claims with scientific literature, clinical studies, and verified user testimonials.</p>
             </div>
             <div>
               <div className="w-16 h-16 bg-[#2d2d2f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#2997ff]">
                 <HelpCircle className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">User-Centric Focus</h3>
               <p className="text-[#a1a1a6]">We prioritize what actually matters to the buyer: pros, cons, pricing, side effects, and viable alternatives.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 md:px-8 bg-white border-b border-[#d2d2d7]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#f5f5f7] p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">How does Picknixy make money?</h3>
              <p className="text-[#515154]">We participate in various affiliate marketing programs. If you purchase a product through our links, we may earn a small commission at no extra cost to you. This helps fund our research and editorial team.</p>
            </div>
            <div className="bg-[#f5f5f7] p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">Are your reviews biased?</h3>
              <p className="text-[#515154]">No. We maintain strict editorial independence. While we may use affiliate links, our primary goal is to provide accurate, honest information so you can make the best choice for your needs.</p>
            </div>
            <div className="bg-[#f5f5f7] p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">How often do you update content?</h3>
              <p className="text-[#515154]">We regularly review and update our buying guides and product reviews to ensure pricing, features, and availability are current for 2026 and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Affiliate Disclosure */}
      <section className="py-12 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#86868b] leading-relaxed">
            <strong className="text-[#1d1d1f]">Affiliate Disclosure:</strong> Picknixy is an independent review site. The information provided on this website is for educational and informational purposes only. When you buy through links on our site, we may earn an affiliate commission. We do not accept money for positive reviews. Our recommendations are based on our own research and analysis. Please consult with a healthcare professional before starting any new diet, supplement, or fitness regimen.
          </p>
        </div>
      </section>
    </>
  );
}

