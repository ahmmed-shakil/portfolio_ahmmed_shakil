import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import Line from "../../../shared/Line";
import Typography from "../../../shared/Typography/Typography";
import {
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import ProfileCard from "./ProfileCard";

const Education = () => {
  return (
    <div className=" pt-10 pb-20 md:pb-10 bg-slate-700 ">
      <Layout>
        <div className=" space-y-10 px-5 pt-0">
          <div className=" flex flex-col justify-center items-center">
            <Typography className=" section_title text-third">
              BACKGROUND
            </Typography>
            <Line prop={"bg-third"} />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-between">
            <div className=" mb-10 md:mb-0">
              <ProfileCard />
            </div>
            <div className="space-y-2 md:space-y-10 text-third">
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <BuildingLibraryIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Secondary School Certificate (Science)
                  </Typography>
                  <div className=" flex justify-between items-center">
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Year: 2014
                    </Typography>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <BuildingLibraryIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Higher Secondary Certificate (Science)
                  </Typography>
                  <div className=" flex justify-between items-center">
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Year: 2016
                    </Typography>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full  mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <BuildingLibraryIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Bachelor of Science
                  </Typography>
                  <div>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Department of Geography & Environment (Year: 2017-2021)
                    </Typography>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Shahjalal University of Science and Technology
                    </Typography>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Sylhet, Bangladesh
                    </Typography>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full  mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <CodeBracketIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Complete Web Development Course
                  </Typography>
                  <div>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Year: 2020-2022
                    </Typography>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Fundamentals of MERN Stack web development with
                      JavaScript, React, Redux, Node.js, Mongodb and other tools
                    </Typography>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <CodeBracketIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Next Level Web Development
                  </Typography>
                  <div>
                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      Year: 2022-2024
                    </Typography>

                    <Typography className=" text-sm font-semibold mt-0 pt-0">
                      TypeScript, Mongoose, Next.js, Relational Diagrams and
                      Modeling, PostgreSQL, Prisma, Linux, Docker, Docker
                      Compose, CI/CD, Deployment on AWS, AWS S3, CloudFront,
                      EC2, Amplify, Server Setup, Reverse Proxy, Load Balancing
                      using Nginx, Testing (Unit & Integration), Cypress for
                      End-to-End Testing, API Testing with Jest & Supertest,
                      Testing React with React Testing Library & Vitest,
                      GraphQL, Secure API Creation and Optimize Performance,
                      Apollo-Client, Task breakdown technique & SDLC, Project
                      management tools
                    </Typography>
                  </div>
                </div>
              </div>
              <div className=" md:pt-14">
                <div className=" flex flex-col justify-center items-start">
                  <Typography className=" section_title text-third text-center">
                    Experience
                  </Typography>
                  <Line prop={"bg-third"} />
                </div>
              </div>
              <div className=" grid grid-cols-background gap-2 md:gap-0 w-full mx-auto items-start">
                {/* <div className=" flex justify-center gap-3 items-center"> */}
                <BuildingOfficeIcon height={28} width={28} />
                {/* </div> */}
                <div>
                  <Typography className=" text-xl font-semibold mt-0 pt-0">
                    Software Developer Engineer (SDE)
                  </Typography>
                  <div>
                    <Typography className=" text-md font-semibold mt-0 pt-0">
                      JSM Tech Enterprises Pvt Ltd, India
                    </Typography>
                    <Typography className=" text-md font-semibold mt-0 pt-0">
                      May, 2023 - Present
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Education;
