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

const Home = () => {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <div className=" space-y-4 md:space-y-20">
        <HeroSection />
        <About />
        <Projects />
        <Education />
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
