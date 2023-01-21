import React from "react";
import Home from "./pages/home";
import Work from "./pages/work";
import Works from "./pages/works";
import Navbar from "./components/Navbar";
import SizedBox from "./components/SizedBox";
import Page404 from "./pages/page404/page404";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import FrontEnd from "./pages/front-end";
import BackEnd from "./pages/back-end";
import About from "./pages/about/about";

function App(): JSX.Element {
  return (
    <div className="dark:bg-black">
      <BrowserRouter>
        <Navbar/>

        <SizedBox height={60}/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/works/:id" element={<Work />}/>
          <Route path="/front-end" element={<FrontEnd />}/>
          <Route path="/back-end" element={<BackEnd />}/>
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
