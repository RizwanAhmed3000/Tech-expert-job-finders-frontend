import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import WebsiteTemplate from "./pages/WebsiteTemplate";
import OrderAResumeService from "./pages/OrderAResumeService";
import JobAlert from "./pages/JobAlert";

const AuthenticatedRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Define routes for unauthenticated users without layout
const UnauthenticatedRoutes = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/jobalert",
        element: <JobAlert />,
      },
      {
        path: "/orderaresumeservice",
        element: <OrderAResumeService />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/coverletter",
        element: <CoverLetter />,
      },
      {
        path: "/websiteTemplate",
        element: <WebsiteTemplate />,
      },
    ],
  },
  {
    path: "/",
    element: <UnauthenticatedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
