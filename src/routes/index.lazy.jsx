import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TriangleAlert } from "lucide-react";
import Catagory from "../Catagory";
import getBakeries from "../api/getBakeries";
import { useQuery } from "@tanstack/react-query";
import BakeryCard from "../BakeryCard";
import Header from "../Header";
export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });
  const { isLoading: isLoadingBakeries, data: bakeries } = useQuery({
    queryKey: ["bakeries", location],
    queryFn: () => getBakeries(location), //todo: add the location to query
    staleTime: 1000 * 60, // one minute
  });

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
    <>
      <Header />
      <div className="space-y-2 px-5 py-2">
        <h2 className="text-xl font-semibold">Catagories</h2>
        <section className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Catagory
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </section>

        {!isLoadingBakeries && (
          <>
            <h2 className="text-xl font-semibold">Fresh Nearby</h2>

            <section className="flex gap-4">
              {bakeries.map((bakery) => (
                <BakeryCard
                  image={bakery.image}
                  isLiked={bakery.isLiked}
                  bakeryName={bakery.name}
                />
              ))}
            </section>
            <p className="text-xl font-semibold inline">
              <TriangleAlert className="inline pr-1" />
              Hello there! This website is currently under construction. Please
              check back soon.
            </p>
          </>
        )}
      </div>
    </>
  );
}
