const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `    content: \`
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
        <div class="font-bold text-2xl text-amber-950 mb-6 uppercase tracking-wide">Navigating Your Soul Path</div>
        <ul class="space-y-3 list-none pl-0">
          <li><a href="#logic" class="text-amber-700 hover:text-amber-950 font-semibold no-underline hover:underline">The Concept of Reincarnation</a></li>
          <li><a href="#how-it-works" class="text-amber-700 hover:text-amber-950 font-semibold no-underline hover:underline">How the Reading Works</a></li>
          <li><a href="#the-report" class="text-amber-700 hover:text-amber-950 font-semibold no-underline hover:underline">Dissecting the Results</a></li>
          <li><a href="#pros-cons" class="text-amber-700 hover:text-amber-950 font-semibold no-underline hover:underline">The Balanced Verdict: Pros & Cons</a></li>
        </ul>
      </div>

<h2 id="logic">The Concept of Reincarnation</h2>
    <p>
        For centuries, the concept of a "Past Life" has been a subject of philosophical and spiritual discussion across various cultures. The <strong>Past Life Reading</strong> platform offers an educational exploration of these concepts, providing users with a framework to consider how historical or archetypal themes might relate to their current interests or personality traits.
    </p>
    <p>
        Many people experience feelings of affinity for certain historical periods or cultures. While some view these as simple interests, others explore them through the lens of past life theories. This reading provides a structured way to engage with these ideas for personal reflection.
    </p>

    <h2 id="how-it-works">How the Reading Works</h2>
    <p>
        The platform utilizes a visual questionnaire designed to prompt intuitive responses. By presenting users with various archetypal imagery and scenarios, the system aims to identify patterns in their choices.
    </p>
    <p>
        The process is designed to be introspective, encouraging users to consider their immediate reactions to the stimuli presented. The resulting profile is generated based on these patterns, offering a narrative interpretation of the user's responses.
    </p>

    <div class="mystic-quote">
        <i class="fas fa-history text-4xl text-yellow-500 mb-6 block"></i>
        <div class="text-3xl italic font-serif">
            "Exploring the past can sometimes offer a new perspective on the present."
        </div>
    </div>

    <h2 id="the-report">Dissecting the Results</h2>
    <p>The report typically divides its findings into thematic modules, such as exploring potential historical affinities, identifying perceived natural strengths, and discussing common personal challenges. These sections are intended to serve as prompts for self-reflection rather than definitive historical facts.</p>

    <!-- NEW PROS & CONS SECTION -->
    <h2 id="pros-cons">The Balanced Verdict: Pros & Cons</h2>
    <p>When considering an exploratory tool like the Past Life Reading, it's helpful to weigh its features objectively.</p>
    
    <div class="comparison-grid">
        <div class="pro-box">
            <h3 class="mt-0 text-green-800"><i class="fas fa-check-circle mr-2"></i>The Pros</h3>
            <div class="list-item">
                <i class="fas fa-plus text-green-600"></i>
                <span><strong>Introspective Tool:</strong> Provides a unique framework for self-reflection and exploring personal interests.</span>
            </div>
            <div class="list-item">
                <i class="fas fa-plus text-green-600"></i>
                <span><strong>User-Friendly:</strong> The visual quiz format is intuitive and easy to complete.</span>
            </div>
            <div class="list-item">
                <i class="fas fa-plus text-green-600"></i>
                <span><strong>Entertaining:</strong> Offers an engaging narrative experience based on your responses.</span>
            </div>
        </div>
        
        <div class="con-box">
            <h3 class="mt-0 text-red-800"><i class="fas fa-exclamation-circle mr-2"></i>The Cons</h3>
            <div class="list-item">
                <i class="fas fa-minus text-red-600"></i>
                <span><strong>Subjective Interpretation:</strong> The results are based on theoretical concepts and should be viewed as entertainment or prompts for reflection, not historical fact.</span>
            </div>
            <div class="list-item">
                <i class="fas fa-minus text-red-600"></i>
                <span><strong>Requires Open-Mindedness:</strong> The value of the reading depends on the user's interest in spiritual or philosophical concepts.</span>
            </div>
        </div>
    </div>

    <h2>Final Thoughts</h2>
    <p>The <strong>Past Life Reading</strong> offers an intriguing, educational journey into the concepts of reincarnation and personal archetypes. If you are curious about these topics and enjoy introspective exercises, this reading provides a structured and entertaining way to explore them.</p>
    <p>For more content on personal exploration, you might also find our <a href="/review/divine-wealth-path-reading-review">Divine Wealth Path Reading Review</a> interesting.</p>
\`,`;

const startStr = '    content: `\n      <div class="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">\n        <div class="font-bold text-2xl text-amber-950 mb-6 uppercase tracking-wide">Navigating Your Soul Path</div>';
const endStr = '    affiliateLink: "https://55e7dkcb13p4i1amkm1401ajzr.hop.clickbank.net",';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + replacement + '\n' + content.substring(endIdx);
  fs.writeFileSync('src/data/mockData.ts', content);
  console.log('Successfully updated mockData.ts');
} else {
  console.log('Could not find start or end index');
  console.log('startIdx:', startIdx);
  console.log('endIdx:', endIdx);
}
