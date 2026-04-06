export const categories = [
  { 
    id: "health-fitness", 
    name: "Health & Fitness", 
    slug: "health-fitness", 
    description: "Top reviews on supplements, fitness gear, and wellness programs.",
    subcategories: [
      { id: "diets-weight-loss", name: "Diets & Weight Loss", slug: "diets-weight-loss" },
      { id: "dental-health", name: "Dental Health", slug: "dental-health" },
      { id: "exercise-fitness", name: "Exercise & Fitness", slug: "exercise-fitness" },
      { id: "mens-health", name: "Men's Health", slug: "mens-health" },
      { id: "remedies", name: "Remedies", slug: "remedies" },
      { id: "womens-health", name: "Women's Health", slug: "womens-health" },
      { id: "beauty", name: "Beauty", slug: "beauty" },
      { id: "mental-health", name: "Mental Health", slug: "mental-health" }
    ]
  },
  { 
    id: "self-help", 
    name: "Self-Help", 
    slug: "self-help", 
    description: "Discover the best books, courses, and tools for personal growth.",
    subcategories: [
      { id: "survival", name: "Survival", slug: "survival" },
      { id: "motivational-transformational", name: "Motivational / Transformational", slug: "motivational-transformational" }
    ]
  },
  { 
    id: "spiritual", 
    name: "Spiritual", 
    slug: "spiritual", 
    description: "Reviews on meditation tools, spiritual guides, and holistic practices.",
    subcategories: [
      { id: "astrology", name: "Astrology", slug: "astrology" },
      { id: "psychics", name: "Psychics", slug: "psychics" },
      { id: "tarot", name: "Tarot", slug: "tarot" }
    ]
  },
  { 
    id: "relationships-dating", 
    name: "Relationships & Dating", 
    slug: "relationships-dating", 
    description: "Expert reviews on dating apps, relationship courses, and guides.",
    subcategories: [
      { id: "marriage-relationships", name: "Marriage & Relationships", slug: "marriage-relationships" },
      { id: "female-dating-guides", name: "Female Dating Guides", slug: "female-dating-guides" }
    ]
  },
  { 
    id: "software-tools", 
    name: "Software & Tools", 
    slug: "software-tools", 
    description: "In-depth reviews of productivity software, business tools, and apps.",
    subcategories: []
  },
];

export const authors = {
  "sarah-jenkins": {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Senior Editor & Wellness Expert",
    bio: "Sarah has over 10 years of experience reviewing health and fitness products. She is a certified personal trainer and nutritionist.",
    avatar: "https://picsum.photos/seed/sarah/150/150",
  },
  "michael-chen": {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Tech & Software Analyst",
    bio: "Michael is a software engineer turned reviewer. He breaks down complex tools into easy-to-understand guides for businesses and individuals.",
    avatar: "https://picsum.photos/seed/michael/150/150",
  },
  "elena-rodriguez": {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Lifestyle & Relationships Writer",
    bio: "Elena holds a degree in psychology and has spent the last 5 years writing about human connection, self-improvement, and mindfulness.",
    avatar: "https://picsum.photos/seed/elena/150/150",
  }
};

export const reviews = [
  {
    id: "1",
    title: "AG1 Review 2026",
    slug: "athletic-greens-ag1-review",
    category: "health-fitness",
    author: "sarah-jenkins",
    date: "2026-03-15",
    rating: 4.8,
    excerpt: "The ultimate daily nutrition. We analyze the ingredients, taste, and actual health benefits after 60 days.",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=2000",
    pros: ["Comprehensive nutrient profile", "Improves digestion", "Convenient daily habit"],
    cons: ["Premium price point", "Taste isn't for everyone"],
    content: `
      <h2>What is Athletic Greens (AG1)?</h2>
      <p>Athletic Greens, now known as AG1, is a daily foundational nutrition supplement. It boasts 75 vitamins, minerals, whole-food sourced superfoods, probiotics, and adaptogens in one daily scoop.</p>
      
      <h2>My 60-Day Experience</h2>
      <p>I started taking AG1 every morning on an empty stomach. Within the first two weeks, the most noticeable difference was my energy levels. I no longer felt the mid-afternoon slump that usually had me reaching for a second cup of coffee.</p>
      
      <h3>Taste and Mixability</h3>
      <p>Unlike many green powders that taste like lawn clippings, AG1 has a slightly sweet, fruity flavor with hints of vanilla and papaya. It mixes incredibly well with just cold water and a shaker bottle—no blender required.</p>
      
      <h2>Ingredient Breakdown</h2>
      <p>What sets AG1 apart is the quality and bioavailability of its ingredients. It includes:</p>
      <ul>
        <li><strong>Vitamins & Minerals:</strong> Highly absorbable forms like methylcobalamin (B12).</li>
        <li><strong>Pre & Probiotics:</strong> To support gut health and nutrient absorption.</li>
        <li><strong>Adaptogens:</strong> Like ashwagandha and rhodiola for stress management.</li>
      </ul>

      <h2>The Verdict: Is it worth the cost?</h2>
      <p>At around $3 per serving, it's an investment. However, if you were to buy high-quality probiotics, adaptogens, and a multivitamin separately, you would likely spend more. For those looking for a convenient, all-in-one nutritional insurance policy, AG1 is highly recommended.</p>
    `,
    affiliateLink: "#",
    price: "$79.00 / month"
  },
  {
    id: "2",
    title: "Notion vs. Obsidian",
    slug: "notion-vs-obsidian-review",
    category: "software-tools",
    author: "michael-chen",
    date: "2026-04-02",
    rating: 4.9,
    excerpt: "The battle of the second brains. Which productivity tool is best in 2026?",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000",
    pros: ["Notion: Incredible flexibility and collaboration", "Obsidian: Unmatched speed and local data ownership"],
    cons: ["Notion: Can be slow offline", "Obsidian: Steeper learning curve"],
    content: `
      <h2>The Battle of the Second Brains</h2>
      <p>In the world of personal knowledge management (PKM), Notion and Obsidian have emerged as the two heavyweights. But they take fundamentally different approaches to organizing information.</p>
      
      <h2>Notion: The All-in-One Workspace</h2>
      <p>Notion is built on the concept of blocks and databases. It's incredibly versatile. You can build a CRM, a habit tracker, a project management board, and a wiki all in one place.</p>
      <h3>Pros of Notion</h3>
      <p>The collaboration features are unmatched. If you are working with a team, Notion is the clear winner. The UI is clean, and the learning curve for basic features is gentle.</p>

      <h2>Obsidian: The Networked Thought Engine</h2>
      <p>Obsidian is a local-first markdown editor. It doesn't use folders as its primary organizational structure; instead, it uses bidirectional links to create a "graph" of your knowledge.</p>
      <h3>Pros of Obsidian</h3>
      <p>Because it runs locally on plain text files, it is blazingly fast. You own your data forever. The plugin ecosystem is massive, allowing you to customize the app to do almost anything.</p>

      <h2>Final Recommendation</h2>
      <p>Choose <strong>Notion</strong> if you need to collaborate with others, prefer structured databases, and want a beautiful UI out of the box. Choose <strong>Obsidian</strong> if you value privacy, speed, longevity of your notes, and want to build a deeply interconnected web of thoughts.</p>
    `,
    affiliateLink: "#",
    price: "Free / Premium plans available"
  },
  {
    id: "3",
    title: "Headspace vs. Calm",
    slug: "headspace-vs-calm-review",
    category: "spiritual",
    author: "elena-rodriguez",
    date: "2026-03-28",
    rating: 4.7,
    excerpt: "Finding peace in a digital world. The ultimate meditation app showdown.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    pros: ["Headspace: Excellent structured courses for beginners", "Calm: Superior sleep stories and unguided options"],
    cons: ["Headspace: UI can feel a bit childish to some", "Calm: Less structured guidance for absolute beginners"],
    content: `
      <h2>Finding Peace in a Digital World</h2>
      <p>Meditation apps have become essential tools for managing stress. Headspace and Calm dominate the market, but they cater to slightly different needs.</p>
      
      <h2>Headspace: The Guided Path</h2>
      <p>Headspace, co-founded by former Buddhist monk Andy Puddicombe, excels at teaching you *how* to meditate. The app uses cute animations and highly structured courses (like the foundational "Basics" packs) to introduce concepts gently.</p>
      
      <h2>Calm: The Open Sanctuary</h2>
      <p>Calm feels less like a classroom and more like a retreat. While it offers a "7 Days of Calm" introductory course, its real strength lies in its vast library of Sleep Stories (read by celebrities like Matthew McConaughey), soundscapes, and less structured, daily meditations.</p>

      <h2>Which should you choose?</h2>
      <p>If you are completely new to meditation and want a step-by-step guide to building a practice, <strong>Headspace</strong> is the better choice. If you already know the basics and are primarily looking for tools to help you sleep, relax, or deal with acute anxiety, <strong>Calm</strong> is superior.</p>
    `,
    affiliateLink: "#",
    price: "$69.99 / year"
  }
];

export const bestOfArticles = [
  {
    id: "b1",
    title: "7 Best Fitness Trackers for Weight Lifting in 2026",
    slug: "best-fitness-trackers-weight-lifting",
    category: "health-fitness",
    author: "sarah-jenkins",
    date: "2026-04-05",
    excerpt: "Stop relying on step counters. We tested the top wearables that actually track reps, sets, and muscle recovery.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000",
    content: "Full article content here..."
  },
  {
    id: "b2",
    title: "Top 5 Books for Overcoming Imposter Syndrome",
    slug: "best-books-imposter-syndrome",
    category: "self-help",
    author: "elena-rodriguez",
    date: "2026-03-20",
    excerpt: "A curated list of the most impactful books that provide actionable strategies to silence your inner critic.",
    image: "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?q=80&w=1000",
    content: "Full article content here..."
  },
  {
    id: "b3",
    title: "The 4 Best AI Writing Assistants for Bloggers",
    slug: "best-ai-writing-assistants",
    category: "software-tools",
    author: "michael-chen",
    date: "2026-04-01",
    excerpt: "We compare Jasper, Copy.ai, ChatGPT Plus, and Claude to see which tool actually speeds up your workflow without sounding robotic.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    content: "Full article content here..."
  }
];
