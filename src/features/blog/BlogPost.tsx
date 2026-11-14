import BlogPostContent from "./components/BlogPostContent";
import BlogPostHeader from "./components/BlogPostHeader";
import type { Post } from "./types/post";

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <section>
      <BlogPostHeader meta={post.meta} />
      <BlogPostContent content={post.content} />
    </section>
  );
};

export default BlogPost;
