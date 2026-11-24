import { subExtras } from '@/lib/data/subcategories/extras';

interface Props {
  branch: 'cse' | 'ece' | 'eee' | 'mechanical' | 'civil';
  slug: string;
}

export default function SubExtras({ branch, slug }: Props) {
  const extra = subExtras[`${branch}/${slug}`];
  if (!extra) return null;

  return (
    <section className="border-t border-border py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-3">Tools and technology you will work with</h2>
          <ul className="flex flex-wrap gap-2">
            {extra.tech.map((t) => (
              <li key={t} className="text-xs px-3 py-1.5 rounded border border-border bg-card text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded p-5">
            <h2 className="text-base font-bold text-foreground mb-3">What you will learn</h2>
            <ul className="space-y-2 list-disc pl-5">
              {extra.learn.map((item) => (
                <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded p-5">
            <h2 className="text-base font-bold text-foreground mb-3">What examiners ask in the viva</h2>
            <ul className="space-y-2 list-disc pl-5">
              {extra.viva.map((item) => (
                <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
