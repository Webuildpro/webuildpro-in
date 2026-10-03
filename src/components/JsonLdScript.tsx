import { graph, safeJsonLd } from '@/lib/jsonld';

/** Renders schema nodes as a single JSON-LD @graph script. */
export default function JsonLdScript({ nodes }: { nodes: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(graph(...nodes)) }}
    />
  );
}
