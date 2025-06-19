import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const fakeUser = { id: "1", username: "user" };
      const fakeToken = "abc123token";

      localStorage.setItem("user", JSON.stringify(fakeUser));
      localStorage.setItem("token", fakeToken);

      dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back 👋</h2>
        <p className="text-gray-500 text-center text-sm">Sign in to your account</p>

        <button
          onClick={ handleLogin }
          disabled={ isLoading }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition duration-300 flex justify-center items-center disabled:opacity-50"
        >
          { isLoading ? <LoadingSpinner /> : "Login as User" }
        </button>

        <p className="text-sm text-gray-500 text-center">
          New here?{ " " }
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>

        <p className="text-xs text-gray-400 text-center">
          This is a mock login. No real authentication.
        </p>
      </div>
    </div>
  );
};

export default Login;
