/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soviet: {
          red: "#da251d",
          gold: "#ffcd00",
          orange: "#f59e0b",
          white: "#ffffff",
          offwhite: "#fff9f9",
          darkred: "#b01d16",
        },
        primary: {
          DEFAULT: "#1a3a5c",
          dark: "#0f2440",
          light: "#2a5a8a",
        },
        accent: {
          DEFAULT: "#6b5b95",
          light: "#8b7bb5",
        },
        dv: {
          bg: "#f7f8fa",
          card: "#ffffff",
          muted: "#9ca3af",
          text: "#1a202c",
          "text-light": "#4a5568",
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(218, 37, 29, 0.2)',
        'gold-glow': '0 0 15px rgba(245, 158, 11, 0.2)',
        'accent-glow': '0 0 20px rgba(107, 91, 149, 0.25)',
        'card-lift': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
