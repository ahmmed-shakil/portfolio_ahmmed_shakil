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
          links: [
            {
              title: "View",
              href: "https://www.google.com/search?q=gole&rlz=1C1CHBF_enBD1066BD1066&oq=gole&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIQCAIQABiDARixAxjJAxiABDINCAMQABiDARixAxiABDIHCAQQABiABDIQCAUQLhivARjHARixAxiABDIHCAYQABiABDINCAcQABiSAxiABBiKBTINCAgQABiDARixAxiABDIHCAkQABiABNIBCDI0OTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              ),
            },
            {
              title: "Client",
              href: "https://www.google.com/search?q=gole&rlz=1C1CHBF_enBD1066BD1066&oq=gole&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIQCAIQABiDARixAxjJAxiABDINCAMQABiDARixAxiABDIHCAQQABiABDIQCAUQLhivARjHARixAxiABDIHCAYQABiABDINCAcQABiSAxiABBiKBTINCAgQABiDARixAxiABDIHCAkQABiABNIBCDI0OTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              ),
            },
            {
              title: "Server",
              href: "https://www.google.com/search?q=gole&rlz=1C1CHBF_enBD1066BD1066&oq=gole&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIQCAIQABiDARixAxjJAxiABDINCAMQABiDARixAxiABDIHCAQQABiABDIQCAUQLhivARjHARixAxiABDIHCAYQABiABDINCAcQABiSAxiABBiKBTINCAgQABiDARixAxiABDIHCAkQABiABNIBCDI0OTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              ),
            },
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
