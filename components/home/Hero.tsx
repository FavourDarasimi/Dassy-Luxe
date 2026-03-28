import Link from "next/link";
import Image from "next/image";
import {FaWhatsapp} from "react-icons/fa"


export default function Hero() {
  const whatsappLink = "https://wa.me/2349027458696?text=Hello%20DassyLuxe!";
  // Using a high-quality fashion Unsplash image as fallback since generation failed
  const heroImageUrl = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <Image 
          src={heroImageUrl} 
          alt="Dassy Luxe Luxury Fashion" 
          fill 
          priority
          className="object-cover opacity-80"
        />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          <span className="w-[9px] h-[9px] bg-black animate-pulse rounded-full"></span>Welcome to DassyLuxe
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
          Upgrade Your Style
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
          Premium clothing & accessories delivered fast to your doorstep.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
          <Link 
            href="/shop" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center"
          >
            Shop Collection
          </Link>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <FaWhatsapp className="w-5 h-5 mr-2 "/>
            Order on WhatsApp
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
