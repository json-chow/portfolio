import { createFileRoute } from "@tanstack/react-router";
import { getPostBySlug } from "../../features/blog/utils";
import BlogPage from "../../pages/BlogPage";

export const Route = createFileRoute("/blog/$postId")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.postId);
    return { post };
  },
  component: BlogPostRouteComponent,
});

function BlogPostRouteComponent() {
  const { post } = Route.useLoaderData();
  return <BlogPage post={post} />;
}
