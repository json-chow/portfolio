import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../features/header/Header";
import { Analytics } from "@vercel/analytics/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="w-2/3 mx-auto mb-25">
      <Header />
      <main>
        <Outlet />
      </main>
      <Analytics />
    </div>
  );
}
