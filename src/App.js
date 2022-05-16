import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  // Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => (
  <div>
      <ScrollToTop />
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      {/* <Laurels /> */}
      <Gallery />
      <FindUs />
      <Footer />
  </div>
);

export default App;
