import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export function ShareButtons({ url, title }: { url: string, title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-4 py-6 border-t border-b border-[#d2d2d7] my-8">
      <span className="text-sm font-medium text-[#1d1d1f]">Share:</span>
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on Twitter">
        <Twitter className="w-5 h-5" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on Facebook">
        <Facebook className="w-5 h-5" />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on LinkedIn">
        <Linkedin className="w-5 h-5" />
      </a>
      <button onClick={copyLink} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors flex items-center" aria-label="Copy link">
        <LinkIcon className="w-5 h-5" />
        {copied && <span className="ml-2 text-xs text-green-600">Copied!</span>}
      </button>
    </div>
  );
}
