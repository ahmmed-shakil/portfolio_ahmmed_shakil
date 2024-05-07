import React, { useEffect, useState } from "react";
import { Layout } from "../../../shared/Layout/Layout";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import AnalogClock from "./components/AnalogClock";
import bgImg from "../../../../images/HeroSection/hero-bg.gif";
import spaceImg from "../../../../images/HeroSection/lynx_in_space.png";
import { getGreeting } from "../../../../utils/getGreetings";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  const now = new Date();
  // Get the current hour (0-23)
  const currentHour = now.getHours();
  const [message, setMessage] = useState("Greetings!");
  useEffect(() => {
    const text = getGreeting();
    setMessage(text);
  }, [currentHour]);
  return (
    <div className=" min-h-fit">
      <div
        className=" py-20 w-full"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <Layout>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-between items-center">
            <div className=" space-y-3">
              <h6 className="text-xl text-third font-bold">{message}</h6>
              <h2 className="text-2xl md:text-4xl text-primary font-bold">
                WELCOME TO THE WORLD OF CODING!
              </h2>
              <div className=" text-third text-xl py-8">
                <TypewriterComponent
                  options={{
                    strings: [
                      "HTML, CSS, JavaScript, TypeScript",
                      "React, Next Js, Redux",
                      "Node Js, Express, MongoDB, Mongoose, PostgreSQL",
                      "Prisma, Supabase",
                      "AWS, Docker, Docker Compose, CI/CD, Nginx",
                      "Jest, Supertest",
                      "GraphQL, NextAuth, Firebase, Passport Js, Nodemailer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className=" flex justify-start items-center gap-2 mt-0">
                <ButtonPrimary text={"View Projects"} />
                <ButtonPrimary text={"Download Resume"} />
              </div>
            </div>
            <div className=" hidden md:flex">
              <AnalogClock />
              {/* <img src={spaceImg} alt="hero_img" className="h-[100px]" /> */}
            </div>
          </div>
        </Layout>
      </div>
      <svg
        style={{ backgroundClor: "#D9EEE1" }}
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="wavepath"
          d="M0,0  L110,0C35,150 35,0 0,100z"
          fill="#282A35"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
