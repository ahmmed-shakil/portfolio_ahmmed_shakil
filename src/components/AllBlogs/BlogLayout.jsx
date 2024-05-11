import React, { useEffect } from "react";
import { scrollToTopInsatnt } from "../../utils/scrollToTop";

const BlogLayout = ({ children1, children2 }) => {
  useEffect(() => {
    scrollToTopInsatnt();
  }, []);
  return (
    <div className=" py-10  container px-3 lg:px-0 mx-auto w-full lg:w-10/12">
      <div className=" grid grid-cols-1 lg:grid-cols-blogPage gap-4">
        <div>{children1}</div>
        <div>{children2}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
