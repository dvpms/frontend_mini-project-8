import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import OurWorks from "./pages/OurWorks";
import OurWorksDetail from "./pages/OurWorksDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/ourworks/detail/:id" element={<OurWorksDetail />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/blog" element={<BlogList/>} />
          <Route path="/blog/detail/:id" element={<BlogDetail/>} />
        </Routes>
        <Banner/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
