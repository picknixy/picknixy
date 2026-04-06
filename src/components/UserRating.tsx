import { useState } from 'react';
import { Star } from 'lucide-react';

export function UserRating({ expertRating }: { expertRating: number }) {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  // Mock average calculation
  const totalRatings = submitted ? 125 : 124;
  const currentAvg = 4.6;
  const displayAvg = submitted && rating ? ((currentAvg * 124 + rating) / 125).toFixed(1) : currentAvg;

  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">Expert Rating</h3>
        <div className="flex items-center justify-center md:justify-start text-[#1d1d1f]">
          <span className="text-3xl font-bold mr-2">{expertRating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(expertRating) ? 'text-[#1d1d1f] fill-current' : 'text-[#d2d2d7]'}`} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-px h-16 bg-[#d2d2d7] hidden md:block"></div>
      
      <div className="text-center md:text-left flex-grow">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">User Rating</h3>
        <div className="flex items-center justify-center md:justify-start text-[#1d1d1f] mb-2">
          <span className="text-3xl font-bold mr-2">{displayAvg}</span>
          <div className="flex text-sm text-[#6e6e73] items-center">
            based on {totalRatings} reviews
          </div>
        </div>
        
        {!submitted ? (
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-sm text-[#6e6e73] mr-2">Rate it:</span>
            <div className="flex cursor-pointer">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 transition-colors ${ratingValue <= (hover || rating || 0) ? 'text-[#2997ff] fill-current' : 'text-[#d2d2d7]'}`}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => {
                      setRating(ratingValue);
                      setSubmitted(true);
                    }}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-sm text-green-600 font-medium">Thank you for your feedback!</p>
        )}
      </div>
    </div>
  );
}
