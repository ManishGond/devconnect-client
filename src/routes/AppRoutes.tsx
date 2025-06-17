import { Route, Routes } from "react-router-dom";
// import Feed from "../pages/Feed"; make this a lazy loaded page
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Feed = lazy(() => import('../pages/Feed'))

const AppRoutes = () => {
  return (
    <Suspense fallback={ <LoadingSpinner /> }>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
