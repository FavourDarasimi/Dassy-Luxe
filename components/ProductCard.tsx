import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: any; 
  category: { name: string };
};

const postImageUrl = (image: any) => {
  return image ? urlFor(image)?.width(550).height(310).url() : null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/80 overflow-hidden flex flex-col hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        {product.image ? (
          <Image
            src={postImageUrl(product.image) || ""}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
        
        {/* In Stock Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 flex items-center rounded text-[10px] font-bold text-emerald-600 tracking-wide uppercase shadow-sm border border-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
          In stock
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category Name */}
        <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider mb-1 block">
          {product.category?.name || "Uncategorized"}
        </span>
        
        <h3 className="font-bold text-gray-900 text-[15px] truncate mb-1">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-xs mb-6 line-clamp-2 min-h-[32px] leading-relaxed">
          {product.category?.name 
            ? `Experience ultimate luxury and uncompromised quality with our exclusive ${product.category.name.toLowerCase()} collection.` 
            : "Experience ultimate luxury and uncompromised quality tailored for your lifestyle."}
        </p>
        
        {/* Price & Order Button Container */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="font-extrabold text-gray-900 text-[16px]">
            ₦{product.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          
          {/* Compact WhatsApp Order Button */}
          <a 
            href={`https://wa.me/2349027458696?text=${encodeURIComponent(`Hello DassyLuxe! I'm interested in ordering the ${product.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-[9px] bg-[#25D366] hover:bg-[#1ebd5a] text-white text-[12px] font-bold rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.01 2.01h-.02c-5.52 0-10 4.48-10 10 0 2.19.7 4.2 1.89 5.82L2.5 21.5l3.8-1.2h.02c1.6.61 3.32.96 5.12.96 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10z" opacity="0.1"/>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.19.71 4.2 1.9 5.82L2.5 21.5l3.78-1.2A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.2-.42-4.54-1.15l-.33-.19-2.22.71.72-2.18-.21-.34A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.08-5.91c-.22-.11-1.33-.66-1.53-.74-.21-.08-.36-.11-.51.11-.15.22-.58.74-.71.89-.13.15-.26.17-.49.06-.22-.11-.95-.35-1.81-1.12-.66-.6-1.11-1.34-1.24-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.34-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.71-1.68-.19-.44-.38-.38-.51-.38h-.44c-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2 9.34 3.7.19.06.35.12.5.18.23.11.43.18.59.23.63.2.119.38.118.52-.01.14-.52.28-.75.39-.22.11-.22-.11-.22z" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
