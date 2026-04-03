import { client } from "@/sanity/lib/client";
import ProductCard, { Product } from "@/components/ProductCard";

const FEATURED_PRODUCTS_QUERY = `*[ _type == "product" && available == true ]|order(publishedAt desc)[0...8]{_id, name, price, image, category -> {name},sku}`;
const options = { next: { revalidate: 30 } };

export default async function FeaturedProducts() {
  const products: Product[] = await client.fetch<Product[]>(
    FEATURED_PRODUCTS_QUERY,
    {},
    options,
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="italic text-black font-bold tracking-wider uppercase text-sm mb-2 block">
            Most Wanted
          </span>
          <h2 className="italic text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/shop" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
}
