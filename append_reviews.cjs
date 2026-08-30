const fs = require('fs');

const soulmate = `  , {
    id: "soulmate-story-review",
    title: "Soulmate Story Review 2026: Does It Really Work? Honest Insights",
    seoTitle: "Soulmate Story Review (2026)",
    seoDescription: "Read our 2026 Soulmate Story review. Discover if this popular psychic reading really works, including features, pros, and real customer results.",
    seoKeywords: "Soulmate Story review, Soulmate Story, buy Soulmate Story, Soulmate Story psychic reading, Soulmate Story clickbank, soulmate drawing",
    canonicalUrl: "https://www.picknixy.com/soulmate-story-review",
    slug: "soulmate-story-review",
    category: "spiritual",
    author: "picknixy",
    date: "2026-08-28",
    rating: 4.6,
    image: "/soulmate-story-review.jpg",
    imageAlt: "Soulmate Story Review",
    excerpt: "Finding true love can sometimes feel like searching for a needle in a haystack. With modern dating apps creating a sense of burnout, many people are turning to spiritual and alternative methods to find a meaningful connection. Enter Soulmate Story...",
    content: \`
      <div class="prose lg:prose-xl max-w-none text-gray-800">
        <p class="lead text-xl text-gray-600 font-medium mb-8">
          Finding true love can sometimes feel like searching for a needle in a haystack. With modern dating apps creating a sense of burnout, many people are turning to spiritual and alternative methods to find a meaningful connection. Enter <strong>Soulmate Story</strong>, a highly popular digital service that promises to reveal the identity, personality, and energetic signature of your future life partner. But is this just another internet gimmick, or can it genuinely help you find your true love?
        </p>
      </div>
    \`
  }`;

const cashscroller = `  , {
    id: "cashscroller-review",
    title: "CashScroller Review 2026: Scam or Legit AI Content Automation Tool?",
    seoTitle: "CashScroller Review 2026: The Ultimate AI Content Automation Tool?",
    seoDescription: "Comprehensive CashScroller review for 2026. Discover how this AI-powered automation tool generates content, drives traffic, and scales online businesses.",
    seoKeywords: "CashScroller review, CashScroller, buy CashScroller, CashScroller legit, CashScroller scam",
    canonicalUrl: "https://www.picknixy.com/cashscroller-review",
    slug: "cashscroller-review",
    category: "personal-growth",
    author: "Elena Rodriguez",
    date: "2026-08-28",
    rating: 4.8,
    image: "/cashscroller-app-review-make-money-online.png",
    imageAlt: "CashScroller App Review",
    excerpt: "An in-depth, firsthand look at CashScroller. Is this new AI content automation suite the secret to scaling your online business, or just another internet marketing gimmick? We reveal everything.",
    content: \`
      <div class="prose lg:prose-xl max-w-none text-gray-800">
        <p class="lead text-xl text-gray-600 font-medium mb-8">
          An in-depth, firsthand look at CashScroller. Is this new AI content automation suite the secret to scaling your online business, or just another internet marketing gimmick? We reveal everything.
        </p>
      </div>
    \`
  }`;

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');
content = content.replace(/\];$/, soulmate + '\n' + cashscroller + '\n];');
fs.writeFileSync('src/data/mockData.ts', content);
console.log("Appended missing reviews!");
