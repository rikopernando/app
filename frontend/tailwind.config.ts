import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        cream: {
          50: "#FEFCF7",
          100: "#FBF7EE",
          200: "#F4EFE3",
          300: "#E8E1D0",
          400: "#D0C5AC",
        },
        navy: {
          50: "#EEF2FB",
          100: "#D4DCEF",
          300: "#8FA3CB",
          DEFAULT: "#1E3A8A",
          600: "#162D70",
          700: "#0F1F52",
        },
        sky: {
          50: "#EAF5FC",
          100: "#C8E8F7",
          300: "#7ECAED",
          DEFAULT: "#4DAADF",
          600: "#2E88C0",
        },
        mint: {
          50: "#EFF7F1",
          100: "#DCEEE0",
          300: "#B5DDC0",
          DEFAULT: "#8BC5A5",
          600: "#62A57E",
        },
        gold: {
          50: "#FFF8E5",
          100: "#FFEFC1",
          300: "#FFDB83",
          DEFAULT: "#F5C430",
          600: "#D4A017",
        },
        ink: {
          DEFAULT: "#1A2B5E",
          soft: "#4A5880",
          faint: "#8A97B8",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31, 43, 71, 0.08)",
        "soft-lg": "0 24px 70px -24px rgba(31, 43, 71, 0.18)",
        glow: "0 20px 60px -20px rgba(30, 58, 138, 0.30)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
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
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
