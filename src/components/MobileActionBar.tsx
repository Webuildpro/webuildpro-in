'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function MobileActionBar() {
  return (
    <div suppressHydrationWarning className="mobile-action-bar lg:hidden" aria-label="Quick actions">
      <a
        href="tel:+919538208573"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Call WeBuildPro"
      >
        <Icon name="PhoneIcon" size={20} />
        <span className="text-xs font-medium">Call</span>
      </a>
      <a
        href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-muted-foreground hover:text-green-500 transition-colors"
        aria-label="WhatsApp WeBuildPro"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={20} />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        aria-label="Get a quote"
      >
        <Icon name="DocumentTextIcon" size={20} />
        <span className="text-xs font-medium">Get Quote</span>
      </Link>
    </div>
  );
}