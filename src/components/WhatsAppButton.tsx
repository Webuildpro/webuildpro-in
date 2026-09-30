'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/lib/analytics';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      suppressHydrationWarning
      href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WEBUILDPRO on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
    >
      <span
        className={`text-sm font-medium text-foreground bg-card border border-border px-3 py-2 rounded shadow-lg transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
        aria-hidden="true"
      >
        Chat with an Engineer
      </span>
      <span className="relative flex items-center justify-center w-14 h-14">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 wa-pulse" aria-hidden="true" />
        <span className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
          <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-white" />
        </span>
      </span>
    </a>
  );
}