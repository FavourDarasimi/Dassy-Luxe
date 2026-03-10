import Image from "next/image";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
const PRODUCT_QUERY = `*[
  _type == "product"
  
]|order(publishedAt desc)[0...12]{_id, name, price, image}`;
const options = { next: { revalidate: 30 } };

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

const Home = async () => {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCT_QUERY,
    {},
    options,
  );
  // const posts = await client.fetch<SanityDocument[]>(PRODUCT_QUERY, {}, options);

  const postImageUrl = (image: string) => {
    return image ? urlFor(image)?.width(550).height(310).url() : null;
  };

  return (
    <div>
      <h1>Welcome to Dassy Luxe</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {product.image && (
            <Image
              src={postImageUrl(product.image) || ""}
              alt={product.name}
              width={300}
              height={300}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
