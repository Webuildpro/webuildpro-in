/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) / 2)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) * 2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-lg': ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-xl': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'trace': 'trace-draw 2.5s ease-out forwards',
        'wa-pulse': 'wa-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'count-up': 'count-up 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'orange-radial': 'radial-gradient(ellipse at center, rgba(255, 106, 19, 0.15) 0%, transparent 70%)',
        'cyan-radial': 'radial-gradient(ellipse at center, rgba(0, 208, 255, 0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};