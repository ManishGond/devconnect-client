import { HelmetProvider } from 'react-helmet-async';  // ✅ Import HelmetProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import type { AppDispatch } from "./app/store";
import { useEffect, useState } from "react";
import { loginSuccess } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      dispatch(loginSuccess({ user: JSON.parse(user), token }));
    }

    setIsAppReady(true);
  }, [dispatch]);

  if (!isAppReady) return <div>Loading...</div>;

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
