export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/2349027458696?text=Hello%20DassyLuxe!%20I%20have%20an%20inquiry.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.01 2.01h-.02c-5.52 0-10 4.48-10 10 0 2.19.7 4.2 1.89 5.82L2.5 21.5l3.8-1.2h.02c1.6.61 3.32.96 5.12.96 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10z" opacity="0.1"/>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.19.71 4.2 1.9 5.82L2.5 21.5l3.78-1.2A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.2-.42-4.54-1.15l-.33-.19-2.22.71.72-2.18-.21-.34A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.08-5.91c-.22-.11-1.33-.66-1.53-.74-.21-.08-.36-.11-.51.11-.15.22-.58.74-.71.89-.13.15-.26.17-.49.06-.22-.11-.95-.35-1.81-1.12-.66-.6-1.11-1.34-1.24-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.34-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.71-1.68-.19-.44-.38-.38-.51-.38h-.44c-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2 9.34 3.7.19.06.35.12.5.18.23.11.43.18.59.23.63.2.119.38.118.52-.01.14-.52.28-.75.39-.22.11-.22-.11-.22z" />
      </svg>
      {/* Tooltip visible on desktop hover */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-gray-700">
        Chat with a Stylist!
        {/* Little triangle arrow */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-gray-900"></span>
      </span>
    </a>
  );
}
