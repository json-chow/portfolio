import BlogOverview from "../features/blog/BlogOverview";
import { getAllPosts } from "../features/blog/utils";

const BlogPage = () => {
  const posts = getAllPosts();
  return (
    <>
      <BlogOverview posts={posts} />
    </>
  );
};

export default BlogPage;
