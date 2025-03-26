import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn"
import User from "./pages/User/User"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes> 
  </BrowserRouter>
);
