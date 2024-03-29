import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Listings from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

function Router() {
    return(
           
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="products" element={<Listings/>} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<DashBoard/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
}

export default Router;