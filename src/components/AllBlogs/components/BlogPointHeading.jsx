import React from "react";
import Typography from "../../shared/Typography/Typography";

const BlogPointHeading = ({ text }) => {
  return (
    <div className=" my-0">
      <Typography className=" text-lg font-semibold">{text}</Typography>
    </div>
  );
};

export default BlogPointHeading;
