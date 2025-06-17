import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login Button Clicked"); // Debugging line
    const fakeUser = { id: "1", username: "manish" };
    const fakeToken = "abc123token";

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(fakeUser));
    localStorage.setItem("token", fakeToken);

    // Update Redux
    dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));

    // Redirect
    navigate("/");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl mb-4">Login Page (Mock)</h2>
      <button
        onClick={ handleLogin }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login as Manish
      </button>
    </div>
  );
};

export default Login;
