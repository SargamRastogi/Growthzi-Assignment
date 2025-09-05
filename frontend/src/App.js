// App.js
import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="experience"><Experience /></section>
              <section id="portfolio"><Portfolio /></section>
              <section id="testimonials"><Testimonials /></section>
              <section id="blog"><Blog /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />

        {/* Blog detail route */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
