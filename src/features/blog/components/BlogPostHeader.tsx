import type { PostMeta } from "../types/post";

interface BlogPostHeaderProps {
  meta: PostMeta;
}

const BlogPostHeader = ({ meta }: BlogPostHeaderProps) => {
  return <>{meta.title}</>;
};

export default BlogPostHeader;
