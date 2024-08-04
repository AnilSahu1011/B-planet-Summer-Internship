import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Profile from "./Pages/Profile";
import { useState } from "react";
import Template from "./Pages/Template";
import GridBox from "./Pages/GridBox";
import ProductCard from "./Pages/ProductCard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="font-sans antialiased text-black">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Template setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/gridbox" element={<GridBox />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
