export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Fast Delivery",
      description: "Get your orders delivered swiftly anywhere across Nigeria.",
      icon: (
        <svg className="w-6 h-6 sm:w-10 sm:h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Affordable Prices",
      description: "Premium quality fashion that doesn't break the bank.",
      icon: (
        <svg className="w-6 h-6 sm:w-10 sm:h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Products",
      description: "100% authentic and high-quality materials guaranteed.",
      icon: (
        <svg className="w-6 h-6 sm:w-10 sm:h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Easy WhatsApp Ordering",
      description: "Chat directly with us to secure your order instantly.",
      icon: (
        <svg className="w-6 h-6 sm:w-10 sm:h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Why Choose DassyLuxe?</h2>
          <div className="w-16 sm:w-20 h-1 bg-black mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors duration-300 group cursor-default shadow-sm border border-gray-100">
              <div className="mb-3 sm:mb-5 p-3 sm:p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:shadow-black/10">
                {reason.icon}
              </div>
              <h3 className="text-[13px] sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3">{reason.title}</h3>
              <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
