import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 10px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "iris-in": {
          "0%": { clipPath: "circle(0% at 50% 50%)", opacity: "0" },
          "100%": { clipPath: "circle(140% at 50% 50%)", opacity: "1" },
        },
        "iris-out": {
          "0%": { clipPath: "circle(140% at 50% 50%)", opacity: "1" },
          "100%": { clipPath: "circle(0% at 50% 50%)", opacity: "0" },
        },
        "zoom-fade": {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(20px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)", filter: "blur(0)" },
        },
        "letter-rise": {
          "0%": { opacity: "0", transform: "translateY(40px) rotateX(-40deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotateX(0)" },
        },
        "shrink-bar": {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        "toast-pop": {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "60%": { opacity: "1", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "toast-morph-down": {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(40vh) scale(0.4)" },
        },
        "strip-in": {
          "0%": { transform: "translateY(120%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "strip-out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(120%)", opacity: "0" },
        },
        "slide-stack": {
          "0%": { opacity: "0", transform: "translateX(60px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 800ms cubic-bezier(0.22,1,0.36,1) both",
        "fade-in-up": "fade-in-up 900ms cubic-bezier(0.22,1,0.36,1) both",
        "scale-in": "scale-in 700ms cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-right": "slide-in-right 700ms cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-left": "slide-in-left 700ms cubic-bezier(0.22,1,0.36,1) both",
        "shimmer": "shimmer 2.4s linear infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        "iris-in": "iris-in 900ms cubic-bezier(0.22,1,0.36,1) both",
        "iris-out": "iris-out 700ms cubic-bezier(0.65,0,0.35,1) both",
        "zoom-fade": "zoom-fade 800ms cubic-bezier(0.22,1,0.36,1) both",
        "letter-rise": "letter-rise 900ms cubic-bezier(0.22,1,0.36,1) both",
        "toast-pop": "toast-pop 700ms cubic-bezier(0.34,1.56,0.64,1) both",
        "toast-morph-down": "toast-morph-down 900ms cubic-bezier(0.65,0,0.35,1) both",
        "strip-in": "strip-in 700ms cubic-bezier(0.22,1,0.36,1) both",
        "strip-out": "strip-out 500ms cubic-bezier(0.65,0,0.35,1) both",
        "slide-stack": "slide-stack 700ms cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
