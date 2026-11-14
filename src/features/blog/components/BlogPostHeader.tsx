import type { PostMeta } from "../types/post";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });

interface BlogPostHeaderProps {
  meta: PostMeta;
}

const BlogPostHeader = ({ meta }: BlogPostHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="text-5xl mb-2">{meta.title}</div>
      <div className="text-neutral-400">{dateTimeFormat.format(new Date(meta.date))}</div>
    </div>
  );
};

export default BlogPostHeader;
