export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comment Gagner au Casino",
    url: "https://comment-gagner-au-casino.com",
    description: "Guide expert francophone sur les stratégies de casino et les jeux en ligne.",
    inLanguage: "fr",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
