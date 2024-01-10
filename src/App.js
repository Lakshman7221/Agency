import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Navv";
import Home from "./pages/home/Home"
import Footer from "./pages/footer/Footer"
import WhyUs from "./pages/WhyUs";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import OurSkills from "./pages/OurSkills";
import Portifolio from "./pages/Portifolio";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import Process from "./pages/Process";
const App = () => {


  return (
      <Router>
      <Nav/>
        <Routes>
          <Route path="/Agency" element={<Home/>} />
          <Route path="whyus" element={<WhyUs/>} />
          <Route path="about" element={<About/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="our-skills" element={<OurSkills/>} />
          <Route path="portifolio" element={<Portifolio/>} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="process" element={<Process/>} />
          <Route path="services" element={<Services/>} />
        </Routes>
        <Footer/>
      </Router>
  );
};

export default App;
