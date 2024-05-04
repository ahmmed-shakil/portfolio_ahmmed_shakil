import React, { useEffect, useState } from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";
import TabsDropDown from "../../../shared/TabsDropDowns/TabsDropDown";
import image from "../../../../images/HeroSection/robot-hero.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const types = [
    {
      title: "Full Stack",
      slug: "full_stack",
      items: [
        {
          image: image,
          title: "Demo Title full_stack",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
          tools: [
            "React",
            "Redux",
            "PostgreSQL",
            "Prisma",
            "Git",
            "AWS",
            "Docker",
            "CI/CD",
            "Tailwind",
          ],
        },
        {
          image: image,
          title: "Demo Title full_stack",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title full_stack",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
      ],
    },
    {
      title: "Frontend",
      slug: "frontend",
      items: [
        {
          image: image,
          title: "Demo Title frontend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title frontend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title frontend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
      ],
    },
    {
      title: "Backend",
      slug: "backend",
      items: [
        {
          image: image,
          title: "Demo Title backend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title backend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title backend",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
      ],
    },
    {
      title: "Components",
      slug: "components",
      items: [
        {
          image: image,
          title: "Demo Title components",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title components",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title components",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
      ],
    },
    {
      title: "Others",
      slug: "other",
      items: [
        {
          image: image,
          title: "Demo Title other",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title other",
          desc: "eact Hook useEffect has missing dependencies: 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
        {
          image: image,
          title: "Demo Title other",
          desc: " 'data' and 'setState'. Either include them or remove the dependency array. If 'setState' changes too often, find the parent component that defines it and wrap that definition in useCallback",
          clientLink: "adasfasf",
          serverLink: "adadads",
          liveLink: "adasdasd",
        },
      ],
    },
  ];
  const [selectedType, setSelectedType] = useState("Full Stack");
  console.log("🚀 ~ Projects ~ selectedType:", selectedType);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    const selected = types.find((type) => type.title === selectedType.title);
    console.log("🚀 ~ useEffect ~ selected:", selected);
    setSelectedItems(selected?.items);
  }, [selectedType]);
  console.log("🚀 ~ Projects ~ selectedItems:", selectedItems);
  return (
    <div>
      <Layout>
        <div className=" flex flex-col justify-center items-center mb-10">
          <Typography className=" section_title">My Projects</Typography>
          <Line />
        </div>
        <div className="space-y-2 md:space-y-10">
          <div>
            <div
              className={` hidden md:w-9/12 mx-auto md:grid grid-cols-2 md:grid-cols-${types.length} items-center justify-center gap-2`}
            >
              {types.map((type, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedType(type);
                  }}
                  className={` cursor-pointer ${
                    selectedType.title === type.title
                      ? "bg-primary text-slate-200"
                      : "bg-transparent text-primary"
                  }  border py-2 font-semibold flex justify-center items-center rounded-md border-primary hover:bg-primary hover:text-slate-200`}
                >
                  {type.title}
                </div>
              ))}
            </div>
            <div className=" block md:hidden relative">
              <TabsDropDown
                className=" border-primary"
                data={types}
                text={"Select project type"}
                expandClass={" right-0 left-0 top-17"}
                setState={setSelectedType}
              />
            </div>
          </div>
          <div style={{ minHeight: "60vh" }}>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center mt-5">
              {selectedItems?.map((item, index) => (
                <ProjectCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
