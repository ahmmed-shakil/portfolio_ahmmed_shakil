import React from "react";

const BlogText = ({ text }) => {
  return (
    <div className=" my-8">
      <p className=" text-md font-normal">{text}</p>
    </div>
  );
};

export default BlogText;
