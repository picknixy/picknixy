import React, { useState } from 'react';

interface CommentType {
  id: string;
  name: string;
  text: string;
  date: string;
}

export function Comments() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment: CommentType = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    setComments([newComment, ...comments]);
    setName('');
    setText('');
  };

  return (
    <div className="mt-16 pt-10 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Comments {comments.length > 0 ? `(${comments.length})` : ''}
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Leave a comment</h4>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
          <textarea 
            id="comment" 
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-8">
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">{comment.name}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
