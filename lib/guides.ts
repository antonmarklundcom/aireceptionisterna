import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { guideFrontmatterSchema, type GuideFrontmatter } from "@/content/schema";

/**
 * MDX guides pipeline. Reads content/guider/*.mdx, validates frontmatter with
 * zod. The breadth spec writes the actual guides; this scaffold makes the
 * /guider hub and /guider/[slug] route work (and stay empty gracefully) now.
 */

const GUIDES_DIR = path.join(process.cwd(), "content", "guider");

export type Guide = {
  frontmatter: GuideFrontmatter;
  content: string;
};

function ensureDir(): boolean {
  return fs.existsSync(GUIDES_DIR);
}

export function getGuideSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getGuide(slug: string): Guide | null {
  if (!ensureDir()) return null;
  const file = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = guideFrontmatterSchema.parse({ ...data, slug });
  return { frontmatter, content };
}

export function getAllGuides(): Guide[] {
  return getGuideSlugs()
    .map((slug) => getGuide(slug))
    .filter((g): g is Guide => g !== null)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
