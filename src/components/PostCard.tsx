import type { Post } from "../features/post/postSlice";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 mb-6 bg-white dark:bg-gray-800 
        hover:scale-[0.995] transition-transform duration-300 cursor-pointer 
        max-w-full overflow-hidden">

      <div className="flex items-center space-x-3 mb-2">
        {/* User Avatar Placeholder */ }
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300">
          { post.user.charAt(0).toUpperCase() }
        </div>
        <h3 className="text-md font-semibold text-gray-800 dark:text-white break-words">{ post.user }</h3>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-2 break-words">{ post.content }</p>
      { post.image && (
        <img
          src={ post.image }
          alt="Post"
          className="w-full rounded-lg mt-2 object-cover max-h-64"
        />
      ) }
    </div>
  );
};

export default PostCard;
