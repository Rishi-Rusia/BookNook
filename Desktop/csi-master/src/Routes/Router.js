import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import OurTeam from "../pages/OurTeam";

const Router = () => {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<AboutUs />} path="/about-us"></Route>
      <Route element={<Events />} path="/events"></Route>
      <Route element={<ContactUs />} path="/contact-us"></Route>
      <Route element={<Gallery />} path="/our-gallery"></Route>
      <Route element={<OurTeam />} path="/our-team"></Route>
    </Routes>
  );
};

export default Router;
