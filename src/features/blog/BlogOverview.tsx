import BlogOverviewRow from "./components/BlogOverviewRow";
import type { Post } from "./types/post";

interface BlogOverviewProps {
  posts: Post[];
}

const BlogOverview = ({ posts }: BlogOverviewProps) => {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <BlogOverviewRow key={post.slug} postInfo={post}></BlogOverviewRow>
        ))}
      </div>
    </section>
  );
};

export default BlogOverview;
