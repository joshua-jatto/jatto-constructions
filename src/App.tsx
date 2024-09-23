import React from "react";
import { indexPage } from "./pages";

import { Routes, Route} from 'react-router-dom'
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Gallery from "./pages/gallery";

const App: React.FC = () => {
  return (
    <div className=" text-gray-900 relative bg-gradient-to-br from-zinc-900 via-gray-200 to-black">
      <Navbar/>
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/" element={indexPage} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
