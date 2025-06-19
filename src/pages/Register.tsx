import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRegister = () => {
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const newUser = { id: "2", username };
      const newToken = "register123token";

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", newToken);

      dispatch(loginSuccess({ user: newUser, token: newToken }));
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Create Account 🎉</h2>
        <p className="text-gray-500 text-center text-sm">Join us by filling the info below</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={ formData.username }
          onChange={ handleChange }
          className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-900"

        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={ formData.email }
          onChange={ handleChange }
          className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-900"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={ formData.password }
          onChange={ handleChange }
          className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-900"
        />

        {/* Error Message */ }
        { error && (
          <p className="text-red-500 text-sm text-center">{ error }</p>
        ) }

        <button
          onClick={ handleRegister }
          disabled={ isLoading }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition duration-300 flex justify-center items-center disabled:opacity-50"
        >
          { isLoading ? <LoadingSpinner /> : "Register" }
        </button>

        <p className="text-sm text-gray-500 text-center">
          Already have an account?{ " " }
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>

        <p className="text-xs text-gray-400 text-center">
          This is a mock registration. No real backend involved.
        </p>
      </div>
    </div>
  );
};

export default Register;
