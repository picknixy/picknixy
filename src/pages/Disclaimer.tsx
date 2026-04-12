import { SEO } from '../components/SEO';

export function Disclaimer() {
  return (
    <>
      <SEO title="Affiliate Disclaimer" description="Affiliate Disclaimer for Picknixy." />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Affiliate Disclaimer</h1>
        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2>FTC Disclosure Compliance</h2>
          <p>In compliance with the FTC guidelines, please assume the following about links and posts on this site:</p>
          <p>Any/all of the links on Picknixy are affiliate links of which we receive a small commission from sales of certain items, but the price is the same for you. As Picknixy has grown, so have costs associated with running and maintaining it, and affiliate links are a way we help offset these costs.</p>

          <h2>What is an Affiliate Link?</h2>
          <p>Purchases are made on external affiliate company websites: When a reader clicks on an affiliate link located on Picknixy to purchase an item, the reader buys the item from the seller directly (not from Picknixy). Amazon and/or other companies pay Picknixy a small commission or other compensation for promoting their website or products through their affiliate program.</p>
          <p><strong>Prices are exactly the same for you if your purchase is through an affiliate link or a non-affiliate link. You will not pay more by clicking through to the link.</strong></p>

          <h2>Our Review Process</h2>
          <p>While we may receive compensation for reviews or advertisements, we always give our honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this website are purely our own. Any product claim, statistic, quote or other representation about a product or service should be verified with the manufacturer, provider or party in question.</p>

          <h2>Amazon Associates Program</h2>
          <p>Picknixy is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        </div>
      </div>
    </>
  );
}
