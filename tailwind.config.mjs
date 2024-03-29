/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helveue", "sans-serif"],
        serif: ["Crimson Pro", "serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "40rem",
          },
        },
        lqon: {
          css: {
            "--tw-prose-body": theme("colors.neutral[300]"),
            "--tw-prose-headings": theme("colors.neutral[300]"),
            "--tw-prose-lead": theme("colors.neutral[300]"),
            "--tw-prose-links": theme("colors.neutral[300]"),
            "--tw-prose-bold": theme("colors.neutral[300]"),
            "--tw-prose-counters": theme("colors.neutral[300]"),
            "--tw-prose-bullets": theme("colors.neutral[300]"),
            "--tw-prose-hr": theme("colors.neutral[300]"),
            "--tw-prose-quotes": theme("colors.neutral[300]"),
            "--tw-prose-quote-borders": theme("colors.neutral[300]"),
            "--tw-prose-captions": theme("colors.neutral[300]"),
            "--tw-prose-code": theme("colors.neutral[300]"),
            "--tw-prose-pre-code": theme("colors.neutral[300]"),
            "--tw-prose-pre-bg": theme("colors.neutral[300]"),
            "--tw-prose-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-td-borders": theme("colors.neutral[300]"),
            "--tw-prose-invert-body": theme("colors.neutral[300]"),
            "--tw-prose-invert-headings": theme("colors.neutral[300]"),
            "--tw-prose-invert-lead": theme("colors.neutral[300]"),
            "--tw-prose-invert-links": theme("colors.neutral[300]"),
            "--tw-prose-invert-bold": theme("colors.neutral[300]"),
            "--tw-prose-invert-counters": theme("colors.neutral[300]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[300]"),
            "--tw-prose-invert-hr": theme("colors.neutral[300]"),
            "--tw-prose-invert-quotes": theme("colors.neutral[300]"),
            "--tw-prose-invert-quote-borders": theme("colors.neutral[300]"),
            "--tw-prose-invert-captions": theme("colors.neutral[300]"),
            "--tw-prose-invert-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-invert-td-borders": theme("colors.neutral[300]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/nesting"),
    require("@tailwindcss/typography"),
  ],
};
