import React from "react";
import Typography from "../../shared/Typography/Typography";
import Line from "../../shared/Line";

const BlogTitle = ({ text }) => {
  return (
    <div className=" mb-8">
      <Typography className=" text-2xl md:text-4xl font-semibold">
        {text}
      </Typography>
      <Line prop={"bg-primary"} />
    </div>
  );
};

export default BlogTitle;
