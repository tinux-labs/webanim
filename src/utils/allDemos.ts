// src/utils/getAllDemos.ts
import type { MarkdownInstance } from "astro";

interface DemoEntry {
  title: string;
  component: string;
  category: string;
  slug: string;
}

const pages = import.meta.glob<MarkdownInstance<Record<string, any>>>(
  "../pages/*/*.mdx",
  { eager: true }
);

/**
 * Devuelve todas las demos con sus metadatos.
 */
export function getAllDemos(): DemoEntry[] {
  const entries: DemoEntry[] = [];

  for (const path in pages) {
    const page = pages[path];
    const match = path.match(/\/pages\/([^/]+)\/([^/]+)\.mdx$/);

    if (!match) continue;

    const [, category, name] = match;
    const { title, component } = page.frontmatter;

    entries.push({
      title,
      component,
      category,
      slug: `/${category}/${name}`,
    });
  }

  return entries;
}

/**
 * Devuelve demos filtradas por categoría.
 */
export function getDemosByCategory(category: string): DemoEntry[] {
  return getAllDemos().filter((demo) => demo.category === category);
}
