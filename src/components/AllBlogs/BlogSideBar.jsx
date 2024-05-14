import React from "react";
import { useEffect } from "react";
import { blogList } from "../Home/components/Blogs/blogPosts";
import Typography from "../shared/Typography/Typography";
import { useState } from "react";
import BlogCard from "../Home/components/Blogs/BlogCard";

const BlogSideBar = ({ slug }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const selectedBlogs = blogList
      ?.filter((blog) => blog.slug !== slug)
      ?.slice(0, 5);
    setBlogs(selectedBlogs);
  }, [blogList]);
  return (
    <div className=" mt-4">
      <Typography className=" text-xl font-semibold mb-3">
        Other Blogs
      </Typography>
      <div className=" grid grid-cols-1 items-center justify-center gap-4">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogSideBar;
