import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Hello there!</p>
      <p>General Kenobi.</p>
    </div>
  );
}
