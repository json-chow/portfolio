import BlogPostHeader from "./components/BlogPostHeader";
import type { Post } from "./types/post";

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <>
      <BlogPostHeader meta={post.meta} />
    </>
  );
};

export default BlogPost;
