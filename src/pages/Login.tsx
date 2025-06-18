import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const fakeUser = { id: "1", username: "manish" };
      const fakeToken = "abc123token";

      localStorage.setItem("user", JSON.stringify(fakeUser));
      localStorage.setItem("token", fakeToken);

      dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));
      navigate("/");
    }, 2000);
  };

  return (
    <div className="text-center mt-10 p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl mb-4">Login Page (Mock)</h2>
      <button
        onClick={ handleLogin }
        disabled={ isLoading }
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full sm:w-auto mx-auto flex justify-center items-center"
      >
        { isLoading ? <LoadingSpinner /> : "Login as Manish" }
      </button>
    </div>
  );
};

export default Login;
