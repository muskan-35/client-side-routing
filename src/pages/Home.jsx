import { useNavigate } from "react-router-dom";
import { featuresData } from "../data/featuresData";
import { servicesData } from "../data/servicesData";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpeedIcon from "@mui/icons-material/Speed";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LinkIcon from "@mui/icons-material/Link";
import DevicesIcon from "@mui/icons-material/Devices";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-5">
            Welcome to RouteApp
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-8">
            This project demonstrates Client-Side Routing using React Router DOM.
            Navigate between pages without reloading the browser.
          </p>

          <button
            onClick={() => navigate("/services")}
            className="mx-auto flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Services
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Our Services
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Discover the main features of React Router that help build fast and
            user-friendly React applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View All Services
            </button>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-20 bg-blue-600 rounded-2xl text-white text-center py-12 px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore React Router?
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-8 mb-8">
            Learn how React Router helps build fast, smooth, and user-friendly React
            applications with client-side routing.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;