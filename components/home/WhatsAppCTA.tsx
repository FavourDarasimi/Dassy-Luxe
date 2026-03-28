import {FaWhatsapp} from "react-icons/fa"

export default function WhatsAppCTA() {
  const whatsappLink = "https://wa.me/2349027458696?text=Hello%20DassyLuxe!%20I'm%20ready%20to%20order.";

  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden xl:w-[1500px] w-full xl:mx-auto mx-4 rounded-3xl">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mx-20 -my-20 opacity-10 blur-xl">
        <svg fill="currentColor" viewBox="0 0 64 64" className="w-96 h-96 text-[#FDBA74]">
          <path d="M32 0C14.327 0 0 14.327 0 32C0 39.043 2.274 45.568 6.13 51.056L2.333 61.666L13.257 58.114C18.601 61.356 25.047 63.333 32 63.333C49.673 63.333 64 49.006 64 31.333C64 13.66 49.673 0 32 0Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to order?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Don't wait. Chat with our styling experts right now on WhatsApp and let's get your premium package dispatched immediately.
        </p>
        
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-full text-white bg-[#25D366] hover:bg-[#1ebd5a] transform hover:-translate-y-1 transition-all duration-300"
        >
          
          <FaWhatsapp className="w-6 h-6 mr-3 "/>
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}
