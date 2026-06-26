import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { reviews } from "../data/mockData";
import fallbackSvg from "../assets/images/fallback.svg";
import { ArrowRight } from "lucide-react";

export function AllReviews() {
  return (
    <>
      <SEO
        title="All Product Reviews | Picknixy"
        description="Browse our complete collection of expert product reviews, comparisons, and buying guides across health, relationships, self-help, and spirituality."
        keywords="all reviews, product reviews, buying guides, Picknixy"
        canonicalUrl="https://www.picknixy.com/reviews"
      />

      <section className="bg-gradient-to-b from-[#1d1d1f] to-[#000000] text-white pt-24 pb-16 px-4 md:px-8 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 drop-shadow-sm">
            All Reviews
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed">
            Explore our deeply researched reviews to help you make informed purchasing decisions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <Link key={review.id} to={`/${review.slug}`} className="bg-white rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow border border-[#d2d2d7]/50 group">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e8ed] mb-4">
                  <img src={review.image || fallbackSvg} alt={review.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-2 line-clamp-2 group-hover:text-[#2997ff] transition-colors">{review.title}</h3>
                <span className="text-xs text-[#86868b] mt-auto pt-2">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
