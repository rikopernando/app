/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Soft friendly palette — SMP Negeri 1 Sumber Jaya
        cream: {
          50: "#FEFCF7",
          100: "#FBF7EE",
          200: "#F4EFE3",
          300: "#E8E1D0",
          400: "#D0C5AC",
        },
        coral: {
          50: "#FFF2EB",
          100: "#FFE0D1",
          300: "#FFB08A",
          DEFAULT: "#FF8A5C",
          600: "#E66A3A",
          700: "#C6532A",
        },
        sky: {
          50: "#EEF5FD",
          100: "#D9E8F8",
          300: "#9BC1E8",
          DEFAULT: "#5B9BD5",
          600: "#3F7FB8",
        },
        mint: {
          50: "#EFF7F1",
          100: "#DCEEE0",
          300: "#B5DDC0",
          DEFAULT: "#8BC5A5",
          600: "#62A57E",
        },
        honey: {
          50: "#FFF8E5",
          100: "#FFEFC1",
          300: "#FFDB83",
          DEFAULT: "#FFC75F",
          600: "#E0A530",
        },
        ink: {
          DEFAULT: "#1F2B47",
          soft: "#5B6680",
          faint: "#94A0B8",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31, 43, 71, 0.08)",
        "soft-lg": "0 24px 70px -24px rgba(31, 43, 71, 0.18)",
        glow: "0 20px 60px -20px rgba(255, 138, 92, 0.45)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "blob-slow": {
          "0%, 100%": { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
          "50%": { borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "blob-slow": "blob-slow 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
