import { Link } from "@tanstack/react-router";

import type { Post } from "../types/post";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });

interface BlogOverviewRowProps {
  postInfo: Post;
}

const BlogOverviewRow = ({ postInfo }: BlogOverviewRowProps) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/8 shrink-0 text-sm text-neutral-400 overflow-hidden">
        {dateTimeFormat.format(new Date(postInfo.meta.date))}
      </div>
      <Link
        to="/blog/$postId"
        params={{ postId: postInfo.slug }}
        className="basis-5/8 shrink-0 px-1 overflow-hidden"
      >
        <div className="font-semibold">{postInfo.meta.title}</div>
        <div className="text-sm text-neutral-300">{postInfo.meta.summary}</div>
      </Link>
      <div className="basis-2/8 shrink-0 flex items-center flex-wrap grow-0 gap-2 justify-end overflow-hidden">
        {postInfo.meta.tags.map((tag) => (
          <span
            className="truncate text-sm text-neutral-300 border border-neutral-500 rounded-full px-2"
            key={postInfo.meta.title + tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogOverviewRow;
