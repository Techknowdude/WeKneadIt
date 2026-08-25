import { createLazyFileRoute } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className="text-xl font-bold inline">
        <TriangleAlert className="inline pr-1" />
        Hello there! This website is currently under construction. Please check
        back soon.
      </p>
    </div>
  );
}
