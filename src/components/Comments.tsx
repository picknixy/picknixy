import { useState } from 'react';

export function Comments() {
  const [comments, setComments] = useState([
    { id: 1, name: "Alex M.", text: "Great review! I've been using this for a month and completely agree with your pros and cons.", date: "2 days ago" },
    { id: 2, name: "Jordan T.", text: "Is it really worth the price though? I'm still on the fence.", date: "1 week ago" }
  ]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      setComments([
        { id: Date.now(), name, text, date: "Just now" },
        ...comments
      ]);
      setName('');
      setText('');
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-[#d2d2d7]">
      <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="mb-12 bg-[#f5f5f7] p-6 rounded-2xl">
        <h4 className="text-lg font-medium text-[#1d1d1f] mb-4">Leave a comment</h4>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-[#1d1d1f] mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-[#d2d2d7] rounded-lg focus:ring-2 focus:ring-[#2997ff] focus:border-[#2997ff] outline-none transition-colors" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-[#1d1d1f] mb-1">Comment</label>
          <textarea 
            id="comment" 
            rows={4} 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-[#d2d2d7] rounded-lg focus:ring-2 focus:ring-[#2997ff] focus:border-[#2997ff] outline-none transition-colors" 
            required 
          />
        </div>
        <button type="submit" className="bg-[#2997ff] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0071e3] transition-colors">
          Post Comment
        </button>
      </form>

      <div className="space-y-8">
        {comments.map(comment => (
          <div key={comment.id} className="border-b border-[#d2d2d7] pb-8 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#1d1d1f]">{comment.name}</span>
              <span className="text-sm text-[#6e6e73]">{comment.date}</span>
            </div>
            <p className="text-[#1d1d1f]">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
