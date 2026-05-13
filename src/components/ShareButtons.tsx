import { Twitter, Facebook, Linkedin, Link as LinkIcon, Instagram, Music } from 'lucide-react';
import { useState } from 'react';

export function ShareButtons({ url, title }: { url: string, title: string }) {
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState('Copied!');
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = (message = 'Copied!') => {
    navigator.clipboard.writeText(url);
    setCopyMessage(message);
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
      <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on Pinterest">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.105 0 7.39 2.926 7.39 6.831 0 4.084-2.571 7.371-6.14 7.371-1.201 0-2.332-.624-2.719-1.363 0 0-.595 2.268-.739 2.825-.268 1.039-.993 2.34-1.482 3.136 1.229.38 2.532.585 3.879.585 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.638 0 12.017 0z"/>
        </svg>
      </a>
      <button onClick={() => copyLink('Copied for Instagram!')} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on Instagram">
        <Instagram className="w-5 h-5" />
      </button>
      <button onClick={() => copyLink('Copied for TikTok!')} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors" aria-label="Share on TikTok">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.33-.02-.66-.01-.99.12-1.89.94-3.68 2.33-5.01 1.28-1.26 3.06-2.01 4.88-2.12.33-.02.66-.02 1-.02v4.06c-1.07.03-2.08.49-2.83 1.25-.83.84-1.28 2.05-1.16 3.23.11 1.15.74 2.19 1.68 2.82 1.55 1.05 3.73.91 5.12-.34 1.06-.98 1.6-2.43 1.57-3.89-.04-4.83-.01-9.67-.03-14.51h.06z"/>
        </svg>
      </button>
      <button onClick={() => copyLink()} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors flex items-center" aria-label="Copy link">
        <LinkIcon className="w-5 h-5" />
        {copied && <span className="ml-2 text-xs text-green-600">{copyMessage}</span>}
      </button>
    </div>
  );
}
