import React, { useState } from "react";
import Typography from "../../../../shared/Typography/Typography";
import Line from "../../../../shared/Line";
import SkillCard from "./SkillCard";
import img from "../../../../../images/HeroSection/lynx_in_space.png";
const skills = [
  {
    title: "Languages",
    items: [
      {
        title: "JavaScript",
        desc: "Proficient in writing clean, efficient code for both front-end and back-end development.",
        image: img,
      },
      {
        title: "TypeScript",
        desc: "Experience using TypeScript to build scalable and maintainable applications.",
        image: img,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        title: "React",
        desc: "Developing dynamic and interactive user interfaces using React and related libraries.",
        image: img,
      },
      {
        title: "Next.js",
        desc: "Building server-rendered React applications with Next.js for enhanced performance and SEO.",
        image: img,
      },
      {
        title: "Redux",
        desc: "Managing state effectively in complex applications with Redux and its related tools.",
        image: img,
      },
      {
        title: "Tailwind CSS",
        desc: "Using Tailwind CSS to rapidly build modern, responsive UIs with a utility-first approach.",
        image: img,
      },
      {
        title: "Material UI",
        desc: "Utilizing Material UI components to create intuitive and consistent design patterns in applications.",
        image: img,
      },
      {
        title: "Bootstrap",
        desc: "Leveraging Bootstrap for fast prototyping and responsive design with minimal effort.",
        image: img,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        title: "MongoDB",
        desc: "Working with MongoDB for flexible, high-performance NoSQL database management.",
        image: img,
      },
      {
        title: "Prisma",
        desc: "Using Prisma as an ORM for efficient data modeling and management in backend systems.",
        image: img,
      },
      {
        title: "PostgreSQL",
        desc: "Handling complex data storage and queries using PostgreSQL, a powerful relational database.",
        image: img,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "AWS",
        desc: "Leveraging AWS cloud services for scalable, reliable application deployment and management.",
        image: img,
      },
      {
        title: "Docker",
        desc: "Containerizing applications with Docker for consistent and efficient deployment across environments.",
        image: img,
      },
      {
        title: "Docker Compose",
        desc: "Utilizing Docker Compose to manage multi-container Docker applications effectively.",
        image: img,
      },
      {
        title: "CI/CD",
        desc: "Implementing CI/CD pipelines for automated testing, building, and deployment of applications.",
        image: img,
      },
      {
        title: "Git",
        desc: "Version control expertise using Git for tracking changes and collaborating efficiently.",
        image: img,
      },
    ],
  },
];

const Technologies = () => {
  const [selected, setSelected] = useState("Languages");
  const [selectedItems, setSelectedItems] = useState(skills[0].items);

  return (
    <div className=" space-y-16">
      <div className=" flex flex-col justify-center items-center">
        <Typography className=" section_title">My Technologies</Typography>
        <Line />
      </div>
      <div className=" space-y-10">
        <div>
          <div className=" grid grid-cols-4 items-center justify-center gap-2">
            {skills.map((skill, i) => (
              <div
                onClick={() => {
                  setSelected(skill.title);
                  setSelectedItems(skill.items);
                }}
                className={` cursor-pointer ${
                  selected === skill.title
                    ? "bg-primary text-slate-200"
                    : "bg-transparent text-primary"
                }  border py-2 font-semibold flex justify-center items-center rounded-md border-primary hover:bg-primary hover:text-slate-200`}
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center mt-5">
            {selectedItems.map((item, index) => (
              <SkillCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
