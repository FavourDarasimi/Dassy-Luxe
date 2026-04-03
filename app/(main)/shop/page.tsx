import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/components/ProductCard";
import ShopClient from "@/components/shop/ShopClient";

const ALL_PRODUCTS_QUERY = `*[_type == "product" && available == true] | order(_createdAt desc) {
  _id, name, price, image, category->{name}, sku, available
}`;

const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(name asc) { _id, name }`;

const options = { next: { revalidate: 60 } };

export const metadata = {
  title: "Shop – Dassy Luxe",
  description:
    "Browse our full collection of premium fashion pieces. Filter by category, price, color and size to find exactly what you're looking for.",
};

async function ShopPage() {
  const [products, categories] = await Promise.all([
    client.fetch<Product[]>(ALL_PRODUCTS_QUERY, {}, options),
    client.fetch<{ _id: string; name: string }[]>(
      ALL_CATEGORIES_QUERY,
      {},
      options
    ),
  ]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-gray-500">Loading products…</p>
          </div>
        </div>
      }
    >
      <ShopClient products={products} allCategories={categories} />
    </Suspense>
  );
}

export default ShopPage;
