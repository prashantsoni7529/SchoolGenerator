import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administration  from "../Header/Components/AboutUs/administration";
import Inspiration  from "../Header/Components/AboutUs/inspiration";
import  Message  from "../Header/Components/AboutUs/message";
import Profile  from "../Header/Components/AboutUs/profile";
import Vision  from "../Header/Components/AboutUs/vision";
import Home from "../Header/Components/home";  

function Router() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about/">
            <Route path="profile" element={<Profile />} />
            <Route path="inspiration" element={<Inspiration />} />
            <Route path="message" element={<Message />} />
            <Route path="vision" element={<Vision />} />
            <Route path="administration" element={<Administration />} />
          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router