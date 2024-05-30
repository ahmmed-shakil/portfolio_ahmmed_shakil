import React, { useEffect, useState } from "react";
import Typography from "../../../../shared/Typography/Typography";
import Line from "../../../../shared/Line";
import SkillCard from "./SkillCard";
import img from "../../../../../images/HeroSection/lynx_in_space.png";
import TabsDropDown from "../../../../shared/TabsDropDowns/TabsDropDown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactImg from "../../../../../images/Techs/react.svg";
import jsImg from "../../../../../images/Techs/js.webp";
import tsImg from "../../../../../images/Techs/ts.png";
import nextImg from "../../../../../images/Techs/next.avif";
import reduxImg from "../../../../../images/Techs/redux-2.png";
import tailwindImg from "../../../../../images/Techs/tailwind.png";
import muiImg from "../../../../../images/Techs/mui.webp";
import bsImg from "../../../../../images/Techs/bs.jpg";
import mongodbImg from "../../../../../images/Techs/mongodb.webp";
import mongooseImg from "../../../../../images/Techs/mongoose.png";
import expressImg from "../../../../../images/Techs/express.png";
import prismaImg from "../../../../../images/Techs/prisma.png";
import psqlImg from "../../../../../images/Techs/postgeesql.png";
import supabaseImg from "../../../../../images/Techs/supabase.jpeg";
import awsImg from "../../../../../images/Techs/aws.png";
import dockerImg from "../../../../../images/Techs/docker.svg";
import cicdImg from "../../../../../images/Techs/cicd.png";
import gitImg from "../../../../../images/Techs/git.webp";
import nextauthImg from "../../../../../images/Techs/nextauth.png";
import firebaseImg from "../../../../../images/Techs/firebase.png";
import passportImg from "../../../../../images/Techs/passport.png";
import nodemailerImg from "../../../../../images/Techs/nodemailer.svg";
import nodeImg from "../../../../../images/Techs/nodejs.png";
const skills = [
  {
    title: "Languages",
    items: [
      {
        title: "JavaScript",
        desc: "Proficient in writing clean, efficient code for both front-end and back-end development.",
        image: jsImg,
      },
      {
        title: "TypeScript",
        desc: "Experience using TypeScript to build scalable and maintainable applications.",
        image: tsImg,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        title: "React",
        desc: "Developing dynamic and interactive user interfaces using React and related libraries.",
        image: reactImg,
      },
      {
        title: "Next.js",
        desc: "Building server-rendered React applications with Next.js for enhanced performance and SEO.",
        image: nextImg,
      },
      {
        title: "Redux",
        desc: "Managing state effectively in complex applications with Redux and its related tools.",
        image: reduxImg,
      },
      {
        title: "Tailwind CSS",
        desc: "Using Tailwind CSS to rapidly build modern, responsive UIs with a utility-first approach.",
        image: tailwindImg,
      },
      {
        title: "Material UI",
        desc: "Utilizing Material UI components to create intuitive and consistent design patterns in applications.",
        image: muiImg,
      },
      {
        title: "Bootstrap",
        desc: "Leveraging Bootstrap for fast prototyping and responsive design with minimal effort.",
        image: bsImg,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        title: "Node.js",
        desc: "Working with MongoDB for flexible, high-performance NoSQL database management.",
        image: nodeImg,
      },
      {
        title: "MongoDB",
        desc: "Working with MongoDB for flexible, high-performance NoSQL database management.",
        image: mongodbImg,
      },
      {
        title: "Mongoose",
        desc: "Working with MongoDB for flexible, high-performance NoSQL database management.",
        image: mongooseImg,
      },
      {
        title: "Express",
        desc: "Working with MongoDB for flexible, high-performance NoSQL database management.",
        image: expressImg,
      },
      {
        title: "Prisma",
        desc: "Using Prisma as an ORM for efficient data modeling and management in backend systems.",
        image: prismaImg,
      },
      {
        title: "PostgreSQL",
        desc: "Handling complex data storage and queries using PostgreSQL, a powerful relational database.",
        image: psqlImg,
      },
      {
        title: "Supabase",
        desc: "Handling complex data storage and queries using PostgreSQL, a powerful relational database.",
        image: supabaseImg,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "AWS",
        desc: "Leveraging AWS cloud services for scalable, reliable application deployment and management.",
        image: awsImg,
      },
      {
        title: "Docker",
        desc: "Containerizing applications with Docker for consistent and efficient deployment across environments.",
        image: dockerImg,
      },
      {
        title: "CI/CD",
        desc: "Implementing CI/CD pipelines for automated testing, building, and deployment of applications.",
        image: cicdImg,
      },
      {
        title: "Git",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: gitImg,
      },
      {
        title: "NextAuth",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: nextauthImg,
      },
      {
        title: "Firebase",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: firebaseImg,
      },
      {
        title: "Passport Js",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: passportImg,
      },
      {
        title: "Nodemailer",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: nodemailerImg,
      },
    ],
  },
];

const Technologies = () => {
  const [selected, setSelected] = useState("Languages");
  const [selectedItems, setSelectedItems] = useState(skills[0].items);

  useEffect(() => {
    const selectedItem = skills?.find((data) => data.title === selected.title);
    console.log("🚀 ~ useEffect ~ selectedItem:", selectedItem);
    setSelectedItems(selectedItem?.items);
  }, [selected]);
  console.log("🚀 ~ Technologies ~ selected:", selectedItems);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" space-y-16 px-5 pt-0">
      <div className=" flex flex-col justify-center items-center">
        <Typography className=" section_title text-slate-200">
          TECHNOLOGIES
        </Typography>
        <Line prop={"bg-slate-200"} />
      </div>
      <div className="space-y-2 md:space-y-10">
        <div>
          <div className=" hidden md:grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-2">
            {skills.map((skill, i) => (
              <div
                onClick={() => {
                  setSelected(skill);
                  setSelectedItems(skill.items);
                }}
                className={` cursor-pointer ${
                  selected.title === skill.title
                    ? "bg-slate-200 "
                    : "bg-transparent text-slate-200"
                }  border py-2 font-semibold flex justify-center items-center rounded-md border-slate-200 hover:bg-slate-200 hover:text-slate-800`}
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>
        <div className=" block md:hidden relative z-50">
          <TabsDropDown
            text={"Select Technology"}
            data={skills}
            className={" text-slate-200"}
            expandClass={" right-0 left-0 top-17"}
            setState={setSelected}
          />
        </div>
        <div style={{ minHeight: "20vh" }} className=" pt-5 md:pt-0 px-3">
          {selectedItems?.length && (
            <div className="slider-container">
              <Slider {...settings}>
                {/* <div className=" grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center mt-5"> */}
                {selectedItems?.map((item, index) => (
                  <SkillCard key={index} data={item} />
                ))}
                {/* </div> */}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
