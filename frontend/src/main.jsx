import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/userProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Professors from "./views/Professors";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";
import SingleProfessor from "./views/SingleProfessor";
import MyEvaluations from "./views/MyEvaluations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <GoogleOAuthProvider clientId="271756417186-5heann651h9anu7ahtv2ckfo2onetene.apps.googleusercontent.com">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/professors" element={<Professors />} />
            <Route path="/myevaluations" element={<MyEvaluations />} />
            <Route path="/professors/:id" element={<SingleProfessor />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </UserProvider>
);
