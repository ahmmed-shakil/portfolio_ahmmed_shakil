import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import PhoneInputComponent from "../../../shared/Input/PhoneInputComponent";
import DateSelect from "../../../shared/DateSelect/DateSelect";
import TimeSelect from "../../../shared/TimeSelect/TimeSelect";
import Typography from "../../../shared/Typography/Typography";
import Line from "../../../shared/Line";
import image from "../../../../images/Contact/about_img - Copy.jpg";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className=" my-14 py-14 gradient-background text-slate-200 dark:bg-slate-800 rounded-md shadow-lg">
          <div className=" flex justify-center items-center flex-col mb-10">
            <Typography className=" section_title">CONTACT</Typography>
            <Line prop={"bg-slate-200"} />
          </div>
          <div className=" mx-0 lg:mx-3 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
            <div className=" flex flex-col justify-end space-y-6 px-1 md:px-5">
              {/* <div className=" flex justify-center items-center">
                <img
                  src={image}
                  alt="Profile"
                  height={150}
                  width={150}
                  className=" rounded-full object-cover"
                />
              </div> */}
              <SocialMedia />
              <div className=" flex justify-center items-center flex-col">
                <Typography className=" title">SHAKIL AHMMED JOY</Typography>
                <div>
                  <Typography className=" text-md pb-0 mb-0">
                    Software Developer Engineer (SDE)
                  </Typography>
                  <Typography className=" text-md mb-0  pb-0">
                    JSM Tech Enterprises Pvt Ltd, India
                  </Typography>
                </div>
              </div>
              <p className=" text-justify text-slate-50 font-semibold px-2 md:px-10 mt-0 pt-0">
                Please don't hesitate to reach out to me for any assistance. I
                am committed to providing reliable support whenever you need it,
                and I'm always here to help you achieve your goals. Whether it's
                answering questions, offering guidance, or collaborating on
                projects, I'm dedicated to ensuring your success.
              </p>
            </div>
            <div className=" p-1">
              <div className=" flex items-center justify-center">
                <div className=" w-full space-y-5 lg:w-3/4 bg-slate-100 dark:bg-slate-800 text-primary p-3 rounded-md shadow-lg">
                  <h4
                    className=" text-xl font-semibold
                "
                  >
                    Book an appointment
                  </h4>
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className=" h-12 px-3 text-md w-full border-solid border-2  rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className=" h-12 px-3 text-md w-full border-solid border-2  rounded-md"
                    />
                  </div>

                  <div>
                    <PhoneInputComponent />
                  </div>
                  <DateSelect />
                  <TimeSelect />
                  <button className=" bg-primary px-3 text-gray-200 w-full rounded-md py-2 rounded-m border-solid border-2 border-transparent hover:bg-transparent dark:hover:bg-gray-200 hover:scale-95 transition-all duration-200 delay-100 ease-in-out hover:text-primary hover:border-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
