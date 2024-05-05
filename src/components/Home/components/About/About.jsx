import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";
import TypewriterComponent from "typewriter-effect";
import image from "../../../../images/About/about_img.jpg";
import Technologies from "./components/Technologies";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";

const About = () => {
  return (
    <Layout>
      <div className=" pb-5 flex flex-col items-center">
        <Typography className=" section_title">ABOUT ME</Typography>
        <Line />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-0 justify-start items-start pt-10">
        <div className=" flex justify-start">
          <img
            src={image}
            alt="portfolio_image"
            className=" rounded-md w-full md:w-10/12 h-[350px] object-cover grayscale hover:grayscale-0 hover:scale-95 transition-all duration-700 ease-in-out"
          />
        </div>
        <div>
          <Typography className=" text-md dark:text-third font-semibold mb-0 pb-0">
            Hello ! I am
          </Typography>
          <Typography className=" title md:text-4xl text-2xl text-primary dark:text-slate-200 mt-0 pt-0">
            SHAKIL AHMMED JOY
          </Typography>
          <Typography className=" pt-3 md:text-xl font-semibold dark:text-primary mb-0 pb-0">
            Full Stack Developer
          </Typography>
          <Typography className=" pt-1 mt-0 textlg dark:text-primary">
            Mymensingh, Bangladesh
          </Typography>
          <div className=" dark:text-third text-lg py-2">
            <TypewriterComponent
              options={{
                strings: [
                  `I am an ambitious, self-motivated, quick learner and able to work with minimum supervision under tight schedules with an aptitude for learning new technology. I excel in high-pressure environments, consistently delivering quality results on time. My commitment to continuous improvement drives my desire to stay current with industry trends and advancements.`,
                  "I have graudated from Shahjalal University of Science and Technology in Geography and Environment in 2021. Currently working as a Software Developer in a company since May, 2021",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-2 mt-10">
        <ButtonPrimary text={"More About Me"} />
        <ButtonPrimary text={"Download Resume"} />
      </div>
      <div className=" py-10 gradient-background rounded-md my-20">
        <Technologies />
      </div>
    </Layout>
  );
};

export default About;
