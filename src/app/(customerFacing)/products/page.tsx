import { ProductCardSkeleton } from "@/components/ProductCard";
import { Suspense } from "react";
import ProductsSuspense from "./components/ProductsSuspense";
import Search from "./components/Search";
import { getProducts } from "./lib/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="grid grid-cols-1">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductsSuspense products={products} />
        </Suspense>
      </div>
    </>
  );
}
