"use client";
import { ProductCard } from "@/components/ProductCard";
import { useSearchContext } from "./SearchContextProvider";

export default function ProductsSuspense({
  products,
}: {
  products: {
    id: string;
    name: string;
    priceInCents: number;
    filePath: string;
    imagePath: string;
    description: string;
    isAvailableForPurchase: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}) {
  const { search } = useSearchContext();
  const filteredProducts = products.filter((product) =>
    product.name
      .toUpperCase()
      .replace(/ /g, "")
      .includes(search.toUpperCase().replace(/ /g, ""))
  );

  if (search) {
    return filteredProducts.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  } else {
    return products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }
}
