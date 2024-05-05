import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";

const Education = () => {
  return (
    <div className=" py-10 gradient-background my-20">
      <Layout>
        <div className=" space-y-16 px-5 pt-0">
          <div className=" flex flex-col justify-center items-center">
            <Typography className=" section_title text-slate-200">
              BACKGROUND
            </Typography>
            <Line prop={"bg-slate-200"} />
          </div>
          <div className="space-y-2 md:space-y-10">fff</div>
        </div>
      </Layout>
    </div>
  );
};

export default Education;
