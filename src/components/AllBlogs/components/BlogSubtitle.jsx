import React from "react";
import Typography from "../../shared/Typography/Typography";

const BlogSubtitle = ({ text }) => {
  return (
    <div className=" my-8">
      <Typography className=" text-lg md:text-xl font-semibold">
        {text}
      </Typography>
    </div>
  );
};

export default BlogSubtitle;
