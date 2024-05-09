import React from "react";

const BlogImage = ({ image }) => {
  return (
    <div className=" my-14">
      <img
        src={image}
        alt="Image"
        className=" w-full rounded-md max-h-[420px] object-cover"
      />
    </div>
  );
};

export default BlogImage;
