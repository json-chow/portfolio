import { createFileRoute } from "@tanstack/react-router";
import BlogOverviewPage from "../../pages/BlogOverviewPage";
import { getAllPosts } from "../../features/blog/utils";

export const Route = createFileRoute("/blog/")({
  loader: () => ({ posts: getAllPosts() }),
  component: BlogOverviewRouteComponent,
});

function BlogOverviewRouteComponent() {
  const { posts } = Route.useLoaderData();
  return <BlogOverviewPage posts={posts} />;
}
