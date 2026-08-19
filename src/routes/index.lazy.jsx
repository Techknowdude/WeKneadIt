import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className="text-xl font-bold underline">Hello there!</p>
      <p>General Kenobi.</p>
    </div>
  );
}
