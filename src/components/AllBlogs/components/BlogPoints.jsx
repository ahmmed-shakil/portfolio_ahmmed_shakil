import React from "react";
import Typography from "../../shared/Typography/Typography";

const BlogPoints = ({ heading, content }) => {
  return (
    <div className=" mt-0 pt-0 pb-3">
      <Typography className=" text-md p-0 m-0 inline">
        <span className=" font-semibold mr-2">{heading}:</span>
        {content}
      </Typography>
    </div>
  );
};

export default BlogPoints;
