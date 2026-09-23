import React from "react";
import { Heart, Star } from "lucide-react";

const defaultPlaceholder =
  "/images/placeholders/bakery-default-placeholder.png";

export default function BakeryCard({
  image,
  bakeryName,
  isLiked,
  description,
  itemName,
}) {
  return (
    <div className="inline-block w-full rounded-lg bg-neutral-50">
      <div className="relative w-full">
        <img
          src={new URL("/images/bakery_items/" + image, import.meta.url).href}
          alt={itemName || "Available Bakery Item"}
          className="rounded-lg min-w-32 sm:min-w-48 block w-full h-auto"
        />
        <Heart
          className={`absolute top-2 right-2 ${isLiked ? "fill-red-300" : "fill-white"}`}
        />
      </div>
      <div className="p-3 flex-grow flex flex-col justify-between">
        <p className="text-balance font-semibold text-sm sm:text-base">
          {itemName + " - " + bakeryName || "BakeryName"}
        </p>
        <p className="text-balance text-sm sm:text-base">
          {description || "Yummy!"}
        </p>
        <div className="flex">
          <Star className="fill-yellow-300" />
          <p>(2k)</p>
        </div>
        <p className="self-end">0.4mi</p>
      </div>
    </div>
  );
}
