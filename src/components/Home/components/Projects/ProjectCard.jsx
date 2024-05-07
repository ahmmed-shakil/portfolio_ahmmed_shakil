import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  // Define the slide-in animation using useSpring for the hover content
  const slideInStyle = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateY(0)" : "translateY(100%)",
    config: { tension: 150, friction: 30 },
  });

  // Define the slide-down animation using useSpring for the image div
  const slideDownStyle = useSpring({
    opacity: hovered ? 0 : 1,
    transform: hovered ? "translateY(-100%)" : "translateY(0)",
    config: { tension: 150, friction: 30 },
  });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`cursor-pointer h-[340px] bg-primary shadow-lg rounded-md overflow-hidden`}
    >
      {/* Animated div for the image */}
      <animated.div
        style={slideDownStyle}
        className={`h-full  ${hovered ? "hidden" : "block"}`}
      >
        <div
          className={`bg-slate-200 dark:bg-slate-700 h-[180px] flex justify-center items-center rounded-t-md`}
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full rounded-t-md object-cover transition-all ease-in-out duration-1000"
          />
        </div>
        <div className="p-3">
          <Typography className="font-semibold text-slate-200 text-lg mb-0 pb-0">
            {data.title}
          </Typography>
          <Line prop={"bg-slate-200"} />
        </div>
        <div className="px-3">
          {data.tools?.length &&
            data.tools.map((tool, index) => (
              <div
                key={index}
                className="border border-slate-200 p-1 inline-flex justify-center items-center text-slate-200 font-semibold hover:bg-slate-200 hover:text-primary rounded-md text-xs mr-2 mb-2"
              >
                {tool}
              </div>
            ))}
        </div>
      </animated.div>

      {/* Animated div for the hover content */}
      <animated.div
        style={slideInStyle}
        className={`p-3 grid grid-rows-2 bg-primary text-slate-200 ${
          hovered ? "block" : "hidden"
        }`}
      >
        <div className=" mb-0 pb-0">
          <Typography className="font-semibold text-lg mb-0 pb-0">
            {data.title}
          </Typography>
          <Line prop={"bg-slate-200"} />
          <div className="flex justify-between gap-3 items-center mt-5">
            {data.links?.length &&
              data.links.map((link, index) => (
                <NavLink
                  to={link.href}
                  target="_blank"
                  key={index}
                  className="flex justify-start gap-1 items-center py-0 my-0 hover:underline cursor-pointer"
                >
                  {link.icon}
                  <Typography className="text-md py-0 my-0">
                    {link.title}
                  </Typography>
                </NavLink>
              ))}
          </div>
          <p className=" pt-0 mt-4">{data.desc}</p>
        </div>

        <div className="pt-3">
          {data.tools?.length &&
            data.tools.map((tool, index) => (
              <div
                key={index}
                className="border border-slate-200 p-1 inline-flex justify-center items-center font-semibold hover:bg-slate-200 hover:text-primary rounded-md text-xs mr-2 mb-2"
              >
                {tool}
              </div>
            ))}
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
