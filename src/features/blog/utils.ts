import matter from "@11ty/gray-matter";
import type { Post, PostMeta } from "./types/post";

const postFiles = import.meta.glob("/src/content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const getAllPosts = (): Post[] => {
  return Object.entries(postFiles)
    .map(([path, content]) => {
      const slug = path.split("/").pop()?.replace(/\.md$/, "") || "";
      const parsed = matter(content);

      return {
        slug,
        meta: parsed.data as PostMeta,
        content: parsed.content,
      };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
};

export const getPostBySlug = (slug: string) => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};
