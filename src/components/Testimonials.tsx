import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Sarah Jenkins", role: "Fitness Enthusiast", text: "Picknixy's reviews are incredibly thorough. I bought my new treadmill based on their recommendation and couldn't be happier.", rating: 5 },
  { id: 2, name: "Michael T.", role: "Relationship Coach", text: "The relationship and dating guides are spot on. I recommended one of the courses to a client, and it completely transformed their dating life.", rating: 5 },
  { id: 3, name: "Emily Rodriguez", role: "Yoga Instructor", text: "I love the spiritual and wellness guides. They are well-researched, unbiased, and beautifully presented.", rating: 5 }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-[#d2d2d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">What our readers say.</h2>
          <p className="text-xl text-[#6e6e73]">Trusted by thousands of people making smart purchasing decisions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-[#f5f5f7] p-8 rounded-3xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-[#1d1d1f] fill-current' : 'text-[#d2d2d7]'}`} />
                ))}
              </div>
              <p className="text-[#1d1d1f] text-lg mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-[#1d1d1f]">{t.name}</p>
                <p className="text-sm text-[#6e6e73]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
