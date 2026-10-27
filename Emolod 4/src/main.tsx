import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MassageList from "./shared/components/Masseges";
import { massages, ReactLabs_25_04_2025 } from "./fixtures";
import BlogContainer from "./shared/components/BlogComponents";
import Layout from "./shared/components/Pages/layout";
import Home from "./shared/components/Pages/home";
import About from "./shared/components/Pages/about";
import Login from "./shared/components/Pages/login";
import Registration from "./shared/components/Pages/registration";
import Blogs from "./shared/components/Pages/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <MassageList massages={massages} />
    <BlogContainer blog={ReactLabs_25_04_2025} />
  </>
);