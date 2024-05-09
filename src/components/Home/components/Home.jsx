import React from "react";
import DesktopHeader from "../../shared/DesktopHeader";
import Slider from "../../shared/HeroCarousel/Carousel";
import { Layout } from "../../shared/Layout/Layout";
import Features from "./Features/Features";
import { FlashSaleContainer } from "./FlashSale/FlashSaleContainer";
import { HomeProducts } from "./HomeProducts/HomeProducts";
import { CategoryContainer } from "./Categories/CategoryContainer/CategoryContainer";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import MobileHeader from "../../shared/MobileHeader";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      {/* <DesktopHeader /> */}
      {/* <MobileHeader /> */}
      <div>
        <div>
          <HeroSection />
        </div>
        <div id="about" className="pt-0 md:pt-40">
          <About />
        </div>
        <div id="projects" className=" pt-0 md:pt-40">
          <Projects />
        </div>
        <div id="background" className=" pt-0 md:pt-40">
          <Education />
        </div>
        <div id="blogs" className=" pt-24 md:pt-36">
          <Blogs />
        </div>
        <div id="contact" className=" pt-0 md:pt-40">
          <Contact />
        </div>
      </div>
      {/* <Features /> */}
      {/* <Ourcourses /> */}
      {/* <TaskManagerAdd /> */}
      {/* <RoadMap /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
