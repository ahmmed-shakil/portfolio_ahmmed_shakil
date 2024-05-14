import React, { useEffect, useState } from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import image from "../../../../images/Projects/carehub.png";
import { NavLink } from "react-router-dom";
import { blogList } from "./blogPosts";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogList);
  }, [blogList]);
  return (
    <div className=" pb-10">
      <Layout>
        <div className=" space-y-10">
          <div className=" flex flex-col justify-center items-center">
            <Typography className="section_title">BLOGS</Typography>
            <Line />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center mt-10">
            {blogs?.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
