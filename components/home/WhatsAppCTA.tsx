import {FaWhatsapp} from "react-icons/fa"

export default function WhatsAppCTA() {
  const whatsappLink = "https://wa.me/2349027458696?text=Hello%20DassyLuxe!%20I'm%20ready%20to%20order.";

  return (
    <section className="my-5 py-16 md:py-24 bg-[#111827] relative overflow-hidden w-[calc(100%-2rem)] xl:w-[1500px] mx-auto rounded-3xl">
      {/* Decorative patterns */}
      

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
          className="inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 border border-transparent text-base sm:text-lg font-bold rounded-full text-white bg-[#25D366] hover:bg-[#1ebd5a] transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 shrink-0"/>
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}
