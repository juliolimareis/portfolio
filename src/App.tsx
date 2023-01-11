import React from "react";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import SizedBox from "./components/SizedBox";

function App(): JSX.Element {
  return (
    <div className="dark:bg-black">
      <BrowserRouter>
        <Navbar/>
        <SizedBox height={60}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="*" element={<Page404 />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
