import { useState } from "react";
import { FaImage, FaVideo, FaPen } from "react-icons/fa";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    if (postContent.trim()) {
      // For now, just console.log. Later, connect this to Redux or API
      console.log("New Post:", postContent);
      setPostContent("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4">
      <textarea
        value={ postContent }
        onChange={ (e) => setPostContent(e.target.value) }
        placeholder="Start a post..."
        className="w-full p-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 resize-none focus:outline-none focus:ring focus:border-blue-500"
        rows={ 2 }
      />
      <div className="flex items-center justify-between mt-2">
        <div className="flex space-x-4 text-gray-500 dark:text-gray-300">
          <FaImage className="cursor-pointer hover:text-blue-500" title="Image" />
          <FaVideo className="cursor-pointer hover:text-blue-500" title="Video" />
          <FaPen className="cursor-pointer hover:text-blue-500" title="Write Article" />
        </div>
        <button
          onClick={ handlePost }
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
