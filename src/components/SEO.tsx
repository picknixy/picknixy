import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'Review';
  image?: string;
  author?: string;
  datePublished?: string;
  ratingValue?: number;
  reviewCount?: number;
}

export function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  type = 'website', 
  image = 'https://example.com/default-og.jpg',
  author,
  datePublished,
  ratingValue,
  reviewCount = 1
}: SEOProps) {
  const siteName = "Picknixy";
  const fullTitle = `${title} | ${siteName}`;

  // Generate Schema.org JSON-LD
  let schema = null;

  if (type === 'article' || type === 'Review') {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type === 'Review' ? "Review" : "Article",
      "headline": title,
      "description": description,
      "image": image,
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
      schema = {
        ...baseSchema,
        "itemReviewed": {
          "@type": "Product",
          "name": title.replace(' Review', ''),
          "image": image
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
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'Review' ? 'article' : type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
