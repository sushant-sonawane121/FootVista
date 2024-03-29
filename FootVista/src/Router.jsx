import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Listings from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";

function Router() {
    return(
           
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="listings" element={<Listings/>} />
            <Route path="*" element={<PageNotFound/>} />

        </Routes>
    );
}

export default Router;