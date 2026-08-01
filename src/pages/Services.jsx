import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Our Services
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore the core features of React Router DOM that make client-side
        routing fast, smooth, and user-friendly.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
          >
             
            <div className="mb-4">
              {service.icon}
            </div>

            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h2>

            <p className="text-gray-600 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;