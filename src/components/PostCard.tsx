import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";
import type { Post } from "../features/post/postSlice";
import { motion } from "framer-motion";

type SafePost = Partial<Post> & {
  id?: string | number;
  userId?: number;
  userRole?: string;
  title?: string;
  body?: string;
  content?: string;
  image?: string;
};

const PostCard = ({ post }: { post: SafePost }) => {
  const user = post.user ?? `User ${post.userId ?? "?"}`;
  const role = post.userRole ?? "Data Engineer";
  const content = post.content ?? post.body ?? "No content available";

  return (
    <motion.div
      className="border rounded-xl shadow-sm p-4 mb-6 bg-white dark:bg-gray-800
        hover:shadow-lg transition-shadow duration-300 max-w-full overflow-hidden cursor-pointer"
      initial={ { opacity: 0, scale: 0.88 } }
      animate={ { opacity: 1, scale: 1 } }
      transition={ { duration: 0.3 } }
      whileHover={ { scale: 0.98 } }
    >
      {/* User Info Section */ }
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300">
          { user?.charAt(0)?.toUpperCase() ?? "?" }
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800 dark:text-white">{ user }</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{ role }</p>
        </div>
      </div>

      {/* Post Content */ }
      <p className="text-gray-700 dark:text-gray-300 mb-3 break-words">
        { content }
      </p>

      {/* Image if exists */ }
      { post.image && (
        <img
          src={ post.image }
          alt="Post content"
          className="w-full rounded-lg mt-2 object-cover max-h-80"
        />
      ) }

      {/* Action Buttons - Like, Comment, Share */ }
      <div className="flex justify-around mt-4 border-t pt-2 text-gray-500 dark:text-gray-400 text-sm">
        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
          <FiThumbsUp />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
          <FiMessageCircle />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
          <FiShare2 />
          <span>Share</span>
        </button>
      </div>
    </motion.div>
  );
};

export default PostCard;
