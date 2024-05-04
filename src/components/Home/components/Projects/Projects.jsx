import React, { useState } from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";

const Projects = () => {
  const types = [
    {
      title: "Full Stack",
      slug: "full_stack",
    },
    {
      title: "Frontend",
      slug: "frontend",
    },
    {
      title: "Backend",
      slug: "backend",
    },
    {
      title: "Components",
      slug: "components",
    },
    {
      title: "Others",
      slug: "other",
    },
  ];
  const [selectedType, setSelectedType] = useState("full_stack");
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
              className={`md:w-9/12 mx-auto grid grid-cols-2 md:grid-cols-${types.length} items-center justify-center gap-2`}
            >
              {types.map((type, i) => (
                <div
                  onClick={() => {
                    setSelectedType(type.slug);
                  }}
                  className={` cursor-pointer ${
                    selectedType === type.slug
                      ? "bg-primary text-slate-200"
                      : "bg-transparent text-primary"
                  }  border py-2 font-semibold flex justify-center items-center rounded-md border-primary hover:bg-primary hover:text-slate-200`}
                >
                  {type.title}
                </div>
              ))}
            </div>
          </div>
          <div style={{ minHeight: "60vh" }}>
            {/* <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center mt-5">
              {selectedItems.map((item, index) => (
                <SkillCard key={index} data={item} />
              ))}
            </div> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
