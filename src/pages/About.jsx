import InfoIcon from "@mui/icons-material/Info";

function About() {
  return (
    <div className="max-w-5xl min-h-screen mx-auto px-6 py-10">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <InfoIcon sx={{ fontSize: 40 }} className="text-blue-600" />

        <h1 className="text-4xl font-bold text-blue-600">
          About React Router
        </h1>
      </div>

      {/* Introduction */}
      <p className="text-gray-700 leading-7">
        React Router DOM is a library used for client-side routing in React
        applications. It allows users to navigate between different pages
        without reloading the entire website, providing a faster and smoother
        user experience.
      </p>

      {/* Why React Router */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Why React Router?
        </h2>

        <div className="space-y-3 text-gray-700">
          <p>✔ Fast Page Navigation</p>
          <p>✔ No Full Page Reload</p>
          <p>✔ Easy Route Management</p>
          <p>✔ Dynamic Routing Support</p>
          <p>✔ Better User Experience</p>
        </div>
      </div>

      {/* Our Goal */}
      <div className="mt-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Our Goal
        </h2>

        <p className="text-gray-700 leading-7">
          This project demonstrates how React Router DOM enables seamless
          client-side routing in React applications. It provides fast
          navigation, better performance, and a smooth user experience without
          reloading the browser.
        </p>
      </div>
    </div>
  );
}

export default About;