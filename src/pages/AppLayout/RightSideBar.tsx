import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const RightSideBar = () => {
  // Placeholder user data
  const userProfilePic = ""; // Empty string simulates "no profile pic"
  const defaultProfilePic = "https://placehold.co/600x400"; // You can replace this with your default pic URL

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4">
      {/* Profile Info */ }
      <div className="flex flex-col items-center space-y-3">
        <img
          src={ userProfilePic ? userProfilePic : defaultProfilePic }
          alt="User"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h2 className="font-semibold text-center text-gray-800 dark:text-white">
          User
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Full-Stack Developer (MERN) • AI/ML Enthusiast
        </p>
        <Link
          to="/my-profile"
          className="mt-2 text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-center inline-block"
        >
          DevConnect Profile
        </Link>
      </div>

      {/* GitHub Stats */ }
      <div className="space-y-3">
        <a
          href="https://github.com/manishgond"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=manishgond&layout=compact&theme=tokyonight"
            alt="GitHub Top Languages"
            className="w-full rounded-lg"
          />
        </a>
        <a
          href="https://github.com/manishgond"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=manishgond&show_icons=true&theme=tokyonight"
            alt="GitHub Stats Card"
            className="w-full rounded-lg"
          />
        </a>
      </div>

      {/* Additional Options */ }
      <div className="border-t pt-3 space-y-2">
        { ["Saved Items", "Groups", "Newsletters", "Events"].map((item) => (
          <button
            key={ item }
            className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:underline"
          >
            { item }
          </button>
        )) }
      </div>

      {/* Contact / Social Links */ }
      <div className="border-t pt-3 flex justify-center space-x-4">
        <a
          href="mailto:manish.n.gond@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/manishgond/devconnect-client"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/manishgond"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-700 text-xl transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default RightSideBar;
