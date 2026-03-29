interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, id }: { items: FAQItem[]; id?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id={id} className="my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold text-gold mb-6">Questions Fréquentes</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details key={i} className="faq-item">
            <summary>{item.question}</summary>
            <div className="faq-answer">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
