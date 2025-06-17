import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import type { AppDispatch } from "./app/store";
import { Suspense, useEffect, useState } from "react";
import { loginSuccess } from "./features/auth/authSlice";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (user && token) {
        dispatch(loginSuccess({ user: JSON.parse(user), token }));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsAppReady(true);
    };

    loadApp();
  }, [dispatch]);

  if (!isAppReady) return <LoadingSpinner />;

  return (
    <Suspense fallback={ <LoadingSpinner /> }>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
