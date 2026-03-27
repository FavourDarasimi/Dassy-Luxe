export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse Products",
      description: "Explore our premium collection of top-tier fashion and accessories perfectly curated for you.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Click "Order on WhatsApp"',
      description: "Found what you love? Simply tap the WhatsApp button on any product to start your order instantly.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Confirm Order via Chat",
      description: "Our dedicated team will finalize your order details and arrange lightning-fast delivery to your doorstep.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            How to Order
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            We've made shopping seamless and personal. Just three simple steps to your new look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#F97316] flex items-center justify-center mb-6 shadow-md shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line for Desktop */}
              {step.id !== 3 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full ml-[60px] h-[2px] bg-gradient-to-r from-[#F97316]/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
