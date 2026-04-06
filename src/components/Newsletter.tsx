import { useState } from 'react';

export function Newsletter({ variant = 'full' }: { variant?: 'full' | 'sidebar' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-[#f5f5f7] p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Subscribe</h3>
        <p className="text-sm text-[#6e6e73] mb-4">Get the latest reviews and guides in your inbox.</p>
        {subscribed ? (
          <p className="text-sm text-green-600 font-medium">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
              className="w-full px-4 py-2 rounded-lg border border-[#d2d2d7] focus:ring-2 focus:ring-[#2997ff] outline-none" 
            />
            <button 
              type="submit" 
              className="w-full bg-[#1d1d1f] text-white py-2 rounded-lg font-medium hover:bg-[#000000] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-[#1d1d1f] py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Stay in the loop.</h2>
        <p className="text-[#a1a1a6] text-lg mb-8">Subscribe to our newsletter for the latest product reviews, exclusive deals, and expert guides.</p>
        {subscribed ? (
          <p className="text-xl text-green-400 font-medium">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
              className="w-full sm:w-96 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-[#2997ff] outline-none" 
            />
            <button 
              type="submit" 
              className="bg-[#2997ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0071e3] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
