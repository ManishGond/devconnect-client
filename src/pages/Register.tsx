import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newUser = { id: "2", username: "new_manish" };
      const newToken = "register123token";

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", newToken);

      dispatch(loginSuccess({ user: newUser, token: newToken }));
      navigate("/");
    }, 2000);
  };

  return (
    <div className="text-center mt-10 p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl mb-4">Register Page (Mock)</h2>
      <button
        onClick={ handleRegister }
        disabled={ isLoading }
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full sm:w-auto flex justify-center items-center"
      >
        { isLoading ? <LoadingSpinner /> : "Register as New Manish" }
      </button>
    </div>
  );
};

export default Register;
