import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Find all h2 and h3 elements within the article content
    const articleContent = document.querySelector('.prose');
    if (!articleContent) return;

    const elements = Array.from(articleContent.querySelectorAll('h2, h3'));
    
    const newHeadings = elements.map((elem, index) => {
      // Ensure the element has an ID for linking
      if (!elem.id) {
        elem.id = `heading-${index}-${elem.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      }
      return {
        id: elem.id,
        text: elem.textContent || '',
        level: elem.tagName.toLowerCase() === 'h2' ? 2 : 3,
      };
    });

    setHeadings(newHeadings);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 max-w-[65ch] mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`${heading.level === 3 ? 'ml-4' : ''}`}
          >
            <a 
              href={`#${heading.id}`}
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
