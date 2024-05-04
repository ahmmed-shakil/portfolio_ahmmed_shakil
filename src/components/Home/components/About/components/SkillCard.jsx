import React from "react";
import Typography from "../../../../shared/Typography/Typography";
import Line from "../../../../shared/Line";

const SkillCard = ({ data }) => {
  console.log("🚀 ~ SkillCard ~ data:", data);
  return (
    <div className=" cursor-pointer grid grid-cols-1 h-full bg-slate-100 dark:bg-slate-900 shadow-lg rounded-md hover:scale-95 transition-all duration-150 ease-linear">
      <div className=" bg-primary py-5 flex justify-center items-center rounded-t-md">
        <img
          src={data.image}
          alt={data.title}
          className=" w-24 h-24 rounded-full"
        />
      </div>
      <div className=" p-3">
        <Typography className=" font-semibold text-lg">{data.title}</Typography>
        <Line />
        <div className=" mt-5">
          <Typography className=" font-sm">{data.desc}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
