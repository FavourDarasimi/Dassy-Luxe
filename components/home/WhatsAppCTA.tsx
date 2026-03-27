export default function WhatsAppCTA() {
  const whatsappLink = "https://wa.me/2349027458696?text=Hello%20DassyLuxe!%20I'm%20ready%20to%20order.";

  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
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
          className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-full text-gray-900 bg-[#25D366] hover:bg-[#1ebd5a] hover:text-white shadow-[0_0_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 transition-all duration-300"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.01 2.01h-.02c-5.52 0-10 4.48-10 10 0 2.19.7 4.2 1.89 5.82L2.5 21.5l3.8-1.2h.02c1.6.61 3.32.96 5.12.96 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10z" opacity="0.1"/>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.19.71 4.2 1.9 5.82L2.5 21.5l3.78-1.2A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.2-.42-4.54-1.15l-.33-.19-2.22.71.72-2.18-.21-.34A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.08-5.91c-.22-.11-1.33-.66-1.53-.74-.21-.08-.36-.11-.51.11-.15.22-.58.74-.71.89-.13.15-.26.17-.49.06-.22-.11-.95-.35-1.81-1.12-.66-.6-1.11-1.34-1.24-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.34-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.71-1.68-.19-.44-.38-.38-.51-.38h-.44c-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2 9.34 3.7.19.06.35.12.5.18.23.11.43.18.59.23.63.2.119.38.118.52-.01.14-.52.28-.75.39-.22.11-.22-.11-.22z" />
          </svg>
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
}
