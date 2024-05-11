import React, { useEffect, useState } from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import image from "../../../../images/Projects/carehub.png";
import { NavLink } from "react-router-dom";
import { blogList } from "./blogPosts";
import { Link } from "react-router-dom";

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
              <div key={index} class="max-w-sm">
                <div class=" group flex rounded-lg h-full bg-slate-100 dark:bg-slate-900  shadow-md hover:shadow-lg transition-all duration-500 ease-in-out p-3 flex-col">
                  <div className=" mb-3">
                    <img
                      className=" h-[180px] object-cover rounded-md w-full"
                      src={blog.image}
                      alt="Image"
                    />
                  </div>
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="8" />
                      </svg>
                    </div>
                    <h2 class="text-lg font-semibold">{blog.title}</h2>
                  </div>
                  <div class="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base">
                      {blog?.desc?.slice(0, 180)}...
                    </p>
                    <Link
                      to={`/blog/${blog.slug}`}
                      state={blog}
                      className="mt-3 rounded-md py-1 border-2 border-primary  hover:scale-105 transition-all duration-300 ease-in-out bg-primary text-slate-200 inline-flex items-center justify-center"
                    >
                      Read More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
