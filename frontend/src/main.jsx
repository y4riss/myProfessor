import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/userProvider.jsx";
import Professors from "./views/Professors";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";
import SingleProfessor from "./views/SingleProfessor";
import MyEvaluations from "./views/MyEvaluations";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/professors",
    element: <Professors />,
  },
  {
    path: "/myevaluations",
    element: <MyEvaluations />,
  },
  {
    path: "/professors/:id",
    element: <SingleProfessor />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <GoogleOAuthProvider clientId="271756417186-5heann651h9anu7ahtv2ckfo2onetene.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </UserProvider>
);
