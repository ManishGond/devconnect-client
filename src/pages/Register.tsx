import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Register Button Clicked"); // Debugging line
    const newUser = { id: "2", username: "new_manish" };
    const newToken = "register123token";

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", newToken);

    // Update Redux
    dispatch(loginSuccess({ user: newUser, token: newToken }));

    // Redirect
    navigate("/");
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl mb-4">Register Page (Mock)</h2>
      <button
        onClick={ handleRegister }
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Register as New Manish
      </button>
    </div>
  );
};

export default Register;
