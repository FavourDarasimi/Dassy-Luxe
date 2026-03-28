export default function PromoSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-20 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
          🔥 10% Off Your First Order
        </h2>
        <p className="mt-4 text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-10 pb-6 border-b border-white/20">
          Unlock premium exclusivity with massive savings and experience the best customer service in town.
        </p>
        
        <div className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-full bg-white text-black font-bold text-lg shadow-xl transform hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          Plus Free Delivery in Lagos!
        </div>
      </div>
    </section>
  );
}
