import type { Post } from "../types/post";

interface BlogOverviewRowProps {
  postInfo: Post;
}

const BlogOverviewRow = ({ postInfo }: BlogOverviewRowProps) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/8">{postInfo.meta.date}</div>
      <div className="basis-5/8">
        <div>{postInfo.meta.title}</div>
        <div>{postInfo.meta.summary}</div>
      </div>
      <div className="basis-2/8">
        {postInfo.meta.tags.map((tag) => (
          <span key={postInfo.meta.title + tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogOverviewRow;
