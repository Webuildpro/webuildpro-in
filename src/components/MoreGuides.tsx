import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export interface GuideLink {
  href: string;
  label: string;
}

/**
 * Contextual internal links placed on the site's strongest pages so link equity and crawl
 * priority flow to guides Google has discovered but not yet crawled or ranked.
 */
export default function MoreGuides({ heading, links }: { heading: string; links: GuideLink[] }) {
  return (
    <nav aria-label={heading} className="border-t border-border pt-8 mb-8">
      <h3 className="text-sm font-bold text-foreground mb-4">{heading}</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
            >
              <Icon name="ArrowRightIcon" size={12} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
