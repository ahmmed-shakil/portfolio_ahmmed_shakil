import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import image from "../../../../images/Projects/carehub.png";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <div className=" py-10">
      <Layout>
        <div className=" space-y-10">
          <div className=" flex flex-col justify-center items-center">
            <Typography className="section_title">BLOGS</Typography>
            <Line />
          </div>
          <div class="flex flex-wrap justify-center mt-10">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg h-full bg-primary p-3 flex-col">
                <div className=" mb-3">
                  <img
                    className=" h-[180px] object-cover rounded-md"
                    src={image}
                    alt="Image"
                  />
                </div>
                <div class="flex items-center mb-3">
                  {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div> */}
                  <h2 class="text-white dark:text-white text-lg font-medium">
                    Fundamentals of JavaScript with Es6 fffs
                  </h2>
                </div>
                <div class="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <NavLink className="mt-3 rounded-md py-1 hover:scale-105 transition-all duration-300 ease-in-out bg-slate-200 dark:bg-slate-700 dark:text-white inline-flex items-center justify-center">
                    Learn More
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
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
