import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-100">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;