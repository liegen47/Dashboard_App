import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import "./style.css";
import TodoPage from "./pages/TodoPage";
import ResumeNew from "./pages/ResumeNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/Todos",
    element: <TodoPage></TodoPage>,
  },
  {
    path: "/Resume",
    element: <ResumeNew></ResumeNew>,
  },
]);

function App() {
  return (
    <div className="App">
      {" "}
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
