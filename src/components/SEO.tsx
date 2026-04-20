import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'Review';
  image?: string;
  author?: string;
  datePublished?: string;
  ratingValue?: number;
  reviewCount?: number;
  noindex?: boolean;
}

export function SEO({ 
  title, 
  description, 
  keywords,
  canonicalUrl, 
  type = 'website', 
  image = 'https://example.com/default-og.jpg',
  author,
  datePublished,
  ratingValue,
  reviewCount = 1,
  noindex = false
}: SEOProps) {
  const siteName = "Picknixy";
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '');
  
  // Ensure image is an absolute URL for Open Graph and Twitter
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : (typeof window !== 'undefined' ? window.location.origin + (image.startsWith('/') ? '' : '/') + image : `https://picknixy.com${image.startsWith('/') ? '' : '/'}${image}`);

  // Generate Schema.org JSON-LD
  let schema = null;

  if (type === 'article' || type === 'Review') {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type === 'Review' ? "Review" : "Article",
      "headline": title,
      "description": description,
      "image": absoluteImageUrl,
      "author": {
        "@type": "Person",
        "name": author || "Editorial Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": "https://picknixy.com/logo.png"
        }
      },
      "datePublished": datePublished || new Date().toISOString(),
    };

    if (type === 'Review' && ratingValue) {
      const itemName = title.includes('Soul Manifestation') 
        ? 'Soul Manifestation Personalized Blueprint' 
        : title.replace(' Review', '');

      schema = {
        ...baseSchema,
        "itemReviewed": {
          "@type": "Product",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0"
          },
          "name": itemName,
          "image": absoluteImageUrl,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "reviewCount": reviewCount
          }
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": ratingValue,
          "bestRating": "5"
        }
      };
    } else {
      schema = baseSchema;
    }
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": "https://picknixy.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://picknixy.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'Review' ? 'article' : type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Canonical Link */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
