import BlogOverview from "../features/blog/BlogOverview";
import type { Post } from "../features/blog/types/post";

interface BlogOverviewPageProps {
  posts: Post[];
}

const BlogOverviewPage = ({ posts }: BlogOverviewPageProps) => {
  return <BlogOverview posts={posts} />;
};

export default BlogOverviewPage;
