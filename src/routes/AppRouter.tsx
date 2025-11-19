import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("../layouts/MainLayout"));
import LandingPage from "../layouts/LandingPage";

import Loader from "../feedback/Loader";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Profile from "../pages/Profile";
import SearchPage from "../pages/Search";
import ErrorBoundary from "../components/error/ErrorBoundary";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
      { path: "/shop", element: <Shop /> },
      { path: "/profile", element: <Profile /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
