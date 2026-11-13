import BlogPost from "../features/blog/BlogPost";
import type { Post } from "../features/blog/types/post";

interface BlogPageProps {
  post: Post;
}

const BlogPage = ({ post }: BlogPageProps) => {
  return <BlogPost post={post} />;
};

export default BlogPage;
