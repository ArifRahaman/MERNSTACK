import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact6 from "./components/Contact";
import About from "./components/About";
import Errorpage from "./components/Errorpage";


function App() {
  return (
    <>
      <Navbar />
   
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact6 />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Errorpage />} />
          <Route path="*" element={<Errorpage />} />
          {/* Add a default route or a 404 component here */}
        </Routes>
     
      {/* Your additional content and components can go here */}
    </>
  );
}

export default App;
