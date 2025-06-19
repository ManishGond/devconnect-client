import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./features/auth/authSlice";
import type { AppDispatch } from "./app/store";
import SplashScreen from "./components/SplashScreen";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");

    if (user && token) {
      if (expiry && Date.now() > Number(expiry)) {
        dispatch(logout());
        toast.info("Session expired. Please login again.");
      } else {
        dispatch(loginSuccess({ user: JSON.parse(user), token }));

        const remainingTime = expiry ? Number(expiry) - Date.now() : 0;

        const logoutTimer = setTimeout(() => {
          dispatch(logout());
          toast.info("Session expired due to inactivity. Please login again.");
        }, remainingTime);

        return () => clearTimeout(logoutTimer);
      }
    }

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
