import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import type { AppDispatch, RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.info("Logged out successfully 👋");
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow">
      <h1 className="text-xl font-bold cursor-pointer" onClick={ () => navigate("/") }>
        DevConnect
      </h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        { isAuthenticated ? (
          <button
            onClick={ handleLogout }
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={ handleLoginRedirect }
            className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded"
          >
            Login
          </button>
        ) }
      </div>
    </div>
  );
};

export default Navbar;
