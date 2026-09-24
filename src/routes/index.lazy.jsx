import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TriangleAlert } from "lucide-react";
import Category from "../Category";
import getBakeries from "../api/getBakeries";
import { useQuery } from "@tanstack/react-query";
import BakeryCard from "../BakeryCard";
import Header from "../Header";
import getFeaturedItems from "../api/getFeaturedItems";
import getCatagories from "../api/getCategories";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });
  const { isLoading: isLoadingCategories, data: catagories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCatagories(),
    staleTime: 1000 * 60 * 60, // one hour
  });
  const { isLoading: isLoadingBakeries, data: bakeries } = useQuery({
    queryKey: ["bakeries", location],
    queryFn: () => getFeaturedItems(location), //todo: add the location to query
    staleTime: 1000 * 60, // one minute
  });

  return (
    <>
      <Header />
      <div className="space-y-2 px-5 py-2">
        {!isLoadingCategories && (
          <>
            <h2 className="text-xl font-semibold ml-4">Categories</h2>
            <section className="flex gap-2 overflow-hidden overflow-x-auto">
              {catagories.map((category) => (
                <Category
                  key={category.name}
                  name={category.name}
                  image={category.image}
                />
              ))}
            </section>
          </>
        )}
        {!isLoadingBakeries && (
          <>
            <h2 className="text-xl font-semibold ml-4">Fresh Nearby</h2>

            <section className="flex gap-4 overflow-hidden overflow-x-auto">
              {bakeries.map((bakery) => (
                <BakeryCard
                  image={bakery.image}
                  bakeryName={bakery.bakery_name}
                  description={bakery.description}
                  itemName={bakery.item_name}
                />
              ))}
            </section>
          </>
        )}
      </div>
    </>
  );
}
