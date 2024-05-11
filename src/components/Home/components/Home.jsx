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
import SmoothScroll from "../../shared/SmoothScroll";
import MouseScrollIcon from "../../shared/MouseScrollIcon";
import DesktopFooter from "../../DesktopFooter";
import MobileFooter from "../../MobileFooter";

const Home = () => {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <div>
        <div className=" relative">
          <SmoothScroll targetId="about" bottom={"50px"}>
            <MouseScrollIcon prop={"text-primary"} />
          </SmoothScroll>
          <HeroSection />
        </div>
        <div className=" relative">
          <SmoothScroll targetId="projects" bottom={"-60px"}>
            <MouseScrollIcon prop={"text-slate-900 dark:text-slate-200"} />
          </SmoothScroll>
          <div id="about" className="pt-24 md:pt-40">
            <About />
          </div>
        </div>
        <div className=" relative">
          <SmoothScroll targetId="background">
            <MouseScrollIcon />
          </SmoothScroll>
          <div id="projects" className=" pt-24 md:pt-40">
            <Projects />
          </div>
        </div>
        <div className=" relative">
          <SmoothScroll targetId="blogs" bottom={"10px"}>
            <MouseScrollIcon prop={"text-primary"} />
          </SmoothScroll>
          <div id="background" className=" pt-24 md:pt-40">
            <Education />
          </div>
        </div>
        <div className=" relative">
          <SmoothScroll targetId="contact" bottom={"-80px"}>
            <MouseScrollIcon />
          </SmoothScroll>
          <div id="blogs" className=" pt-24 md:pt-36">
            <Blogs />
          </div>
        </div>
        <div className=" relative">
          <div id="contact" className=" pt-24 md:pt-40">
            <Contact />
          </div>
        </div>
      </div>
      {/* <Features /> */}
      {/* <Ourcourses /> */}
      {/* <TaskManagerAdd /> */}
      {/* <RoadMap /> */}
      {/* <Contact /> */}

      <MobileFooter />
      <DesktopFooter />
    </div>
  );
};

export default Home;
