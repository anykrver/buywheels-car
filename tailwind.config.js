/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6A00',
          50: '#FFF3EB',
          100: '#FFE4CC',
          200: '#FFC799',
          300: '#FFA866',
          400: '#FF8833',
          500: '#FF6A00',
          600: '#CC5500',
          700: '#993F00',
          800: '#662A00',
          900: '#331500',
        },
        dark: {
          DEFAULT: '#111111',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#555555',
          600: '#333333',
          700: '#222222',
          800: '#111111',
          900: '#000000',
        },
        surface: '#F7F8FA',
        border: '#E5E7EB',
        muted: '#6B7280',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        'partner-secondary': '#F4F6F8',
        'nickel': '#8F94A0',
        'silverFoil': '#AFB1B6',
        'secondary': '#FFF3EB',
        'mercury': '#E5E7EB',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.15', fontWeight: '800' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        'h5': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.08), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.08)',
        'nav': '0 2px 16px 0 rgba(0,0,0,0.08)',
        'primary': '0 8px 24px 0 rgba(255,106,0,0.32)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      maxWidth: {
        'content': '1280px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #0d0d0d 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6A00 0%, #FF8C00 100%)',
      },
    },
  },
  plugins: [],
};
