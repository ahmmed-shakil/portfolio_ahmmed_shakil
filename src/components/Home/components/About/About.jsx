import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";
import TypewriterComponent from "typewriter-effect";
import image from "../../../../images/HeroSection/robot-hero.jpg";

const About = () => {
  return (
    <div>
      <Layout>
        <div className=" pb-5 flex flex-col items-center">
          <Typography className=" section_title">ABOUT ME</Typography>
          <Line />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-start pt-10">
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
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className=" flex justify-end">
            <img
              src={image}
              alt="portfolio_image"
              className=" rounded-md w-4/5"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
