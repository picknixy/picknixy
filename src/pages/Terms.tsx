import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for Picknixy." />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>By viewing or using this website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>

          <h2>3. License to Use Website</h2>
          <p>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website (including republication on another website);</li>
            <li>Sell, rent or sub-license material from the website;</li>
            <li>Show any material from the website in public;</li>
            <li>Reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;</li>
            <li>Edit or otherwise modify any material on the website.</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>

          <h2>5. Limitations of Liability</h2>
          <p>We will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>
          <ul>
            <li>To the extent that the website is provided free-of-charge, for any direct loss;</li>
            <li>For any indirect, special or consequential loss; or</li>
            <li>For any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
