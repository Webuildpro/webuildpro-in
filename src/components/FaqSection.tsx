import JsonLdScript from '@/components/JsonLdScript';
import { faqSchema } from '@/lib/jsonld';

/** FAQ accordion + FAQPage JSON-LD. Questions mirror real search queries from Search Console. */
export default function FaqSection({ id = 'faq', title = 'Frequently Asked Questions', faqs }: { id?: string; title?: string; faqs: { q: string; a: string }[] }) {
  return (
    <section aria-labelledby={id} className="mb-10">
      <JsonLdScript nodes={[faqSchema(faqs)]} />
      <h2 id={id} className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug scroll-mt-24">{title}</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="bg-card border border-border rounded p-4">
            <summary className="font-semibold text-foreground text-sm cursor-pointer">{f.q}</summary>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
