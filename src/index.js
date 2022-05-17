import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AboutUs, Chef, Footer, SpecialMenu } from "./container";
import { Navbar } from "./components";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactUs from "./container/ContactUs/ContactUs";
import ErrorPage from "./container/ErrorPage/ErrorPage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar /> 
    <Routes>
        <Route path="/restaurant-website" element={<App />} />
        <Route path="/restaurant-website/menu" element={<SpecialMenu />} />
        <Route path="/restaurant-website/contact" element={<ContactUs />} />
        <Route path="/restaurant-website/about" element={<AboutUs />} />
        <Route path="/restaurant-website/chef" element={<Chef />} />
        <Route path="/*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// createRoot(container).render (
// <App />,
// document.getElementById('root')
// );

// ReactDOM.render(<App />, document.getElementById('root'));
