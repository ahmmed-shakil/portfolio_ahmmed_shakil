import React, { useEffect } from "react";
import { scrollToTopInsatnt } from "../../utils/scrollToTop";
import DesktopHeader from "../shared/DesktopHeader";
import MobileHeader from "../shared/MobileHeader";
import MobileFooter from "../MobileFooter";
import DesktopFooter from "../DesktopFooter";

const BlogLayout = ({ children1, children2 }) => {
  useEffect(() => {
    scrollToTopInsatnt();
  }, []);
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className=" py-10  container px-3 lg:px-0 mx-auto w-full lg:w-10/12">
        <div className=" grid grid-cols-1 lg:grid-cols-blogPage gap-10">
          <div>{children1}</div>
          <div>{children2}</div>
        </div>
      </div>

      <MobileFooter />
      <DesktopFooter />
    </>
  );
};

export default BlogLayout;
