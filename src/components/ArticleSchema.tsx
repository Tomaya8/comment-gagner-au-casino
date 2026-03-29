export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://comment-gagner-au-casino.com${url}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "Comment Gagner au Casino",
      url: "https://comment-gagner-au-casino.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Comment Gagner au Casino",
      url: "https://comment-gagner-au-casino.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://comment-gagner-au-casino.com${url}`,
    },
    inLanguage: "fr",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
