import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../app/store";

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
    <div className="text-center mt-10">
      <h2 className="text-xl mb-4">Feed Page (Protected)</h2>
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
