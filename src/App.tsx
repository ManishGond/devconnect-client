import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/auth/authSlice";
import type { AppDispatch } from "./app/store";
import SplashScreen from "./components/SplashScreen"; // ✅ Import splash screen
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      dispatch(loginSuccess({ user: JSON.parse(user), token }));
    }

    // fake loading splash 3 sec
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <HelmetProvider>
      { showSplash ? (
        <SplashScreen onFinish={ () => setShowSplash(false) } />
      ) : (
        <>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={ 3000 }
            hideProgressBar={ false }
            newestOnTop={ false }
            closeOnClick
            rtl={ false }
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      ) }
    </HelmetProvider>
  );
}

export default App;
