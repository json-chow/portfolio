interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  summary: string;
}

interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export type { Post, PostMeta };
