import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.css";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-semibold">
      <Markdown
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default BlogPostContent;
