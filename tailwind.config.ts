import type { Config } from "tailwindcss";

import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", contentPath(import.meta.url, "react")],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: [themes.crimson],
    }),
  ],
} satisfies Config;
