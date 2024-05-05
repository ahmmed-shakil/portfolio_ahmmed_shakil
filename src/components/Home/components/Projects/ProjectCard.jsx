import React, { useState } from "react";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import { LinkIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={` cursor-pointer rid-rows-4 grid-flow-col gap-4 h-full bg-slate-100 dark:bg-slate-900 shadow-lg rounded-md transition-all duration-150 ease-linear pb-2`}
    >
      <div
        className={`bg-slate-200 dark:bg-slate-700 flex justify-center items-center rounded-t-md ${
          hovered ? "absolute top-[-300px] hidden" : "block"
        }`}
      >
        <img
          src={data.image}
          alt={data.title}
          className=" w-full h-full rounded-t-md object-cover transition-all ease-in-out duration-1000"
        />
      </div>

      <div className=" p-3 space-y-1 grid grid-rows-subgrid row-span-3">
        <div>
          <Typography className=" font-semibold text-lg mb-0 pb-0">
            {data.title}
          </Typography>
          <Line />
        </div>
        <div className=" flex justify-between gap-3 items-center py-1">
          {data?.links?.length
            ? data?.links?.map((link, index) => (
                <NavLink
                  to={link?.href}
                  target="_blank"
                  key={index}
                  className=" flex justify-start gap-1 items-center py-0 my-0 hover:underline hover:text-primary cursor-pointer"
                >
                  {link?.icon}
                  <Typography className=" text-md py-0 my-0">
                    {link?.title}
                  </Typography>
                </NavLink>
              ))
            : null}
        </div>
        <p
          className={`transition-all ease-in-out duration-1000 pb-0 mb-0 ${
            hovered ? "block" : "hidden"
          }`}
          style={{ position: !hovered && "absolute", bottom: "-300px" }}
        >
          {data.desc}
        </p>
      </div>
      <div className=" px-3">
        {data?.tools?.length
          ? data?.tools?.map((tool, i) => (
              <div
                key={i}
                className=" border border-primary p-1 rouded-md inline-flex justify-center items-center text-primary font-semibold hover:bg-primary hover:text-slate-200 rounded-md text-xs mr-2 mb-2"
              >
                {tool}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProjectCard;
