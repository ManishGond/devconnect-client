import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../app/store";
import PostCard from "../components/PostCard";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.post.posts);

  const handleLogout = () => {
    // Clear Redux
    dispatch(logout());

    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to Login
    navigate("/login");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-xl mb-4">Feed</h2>
      { posts.map((post) => (
        <PostCard key={ post.id } post={ post } />
      )) }
      <button
        onClick={ handleLogout }
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Feed;
