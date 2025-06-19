import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-blue-200 p-6">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found</h2>
      <p className="text-gray-500 text-center mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-300 shadow-md"
      >
        Go Home
      </Link>

      <p className="text-xs text-gray-400 mt-6 text-center">
        This is a mock 404 page designed for a better user experience.
      </p>
    </div>
  );
};

export default NotFound;
