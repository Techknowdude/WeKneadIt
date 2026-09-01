import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TriangleAlert } from "lucide-react";
import Catagory from "../Catagory";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(
        new URL("../api/categories.json", import.meta.url),
      );
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <div>
      <p className="text-xl font-bold inline">
        <TriangleAlert className="inline pr-1" />
        Hello there! This website is currently under construction. Please check
        back soon.
      </p>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Catagory
            key={category.name}
            name={category.name}
            image={new URL(category.image, import.meta.url).href}
          />
        ))}
      </div>
    </div>
  );
}
