import { type } from "os";

export const SITE = {
  title: "InlineJS",
  description: "InlineJS Design System.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "himerus",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/inlinejs/inline/blob/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/U9hr82Cr`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "inlinejs_documentation",
  appId: "GT1T4MY87D",
  apiKey: "8022fc943afa4d88a3e0dcc9288e2060",
};

// @todo: Implement an automated solution for this sidebar navigation.
export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Documentation: [{ text: "Introduction", link: "en/introduction" }],
    "Design Tokens": [
      { text: "Color Tokens", link: "en/design-tokens/colors" },
    ],
    "Component Library": [
      { text: "InlineAlert", link: "en/components/inline-alert" },
      { text: "InlineLink", link: "en/components/inline-link" },
      { text: "InlineGrid", link: "en/components/inline-grid" },
    ],
  },
};
