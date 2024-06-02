import React from "react";
import { Layout } from "./shared/Layout/Layout";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { HashLink as NavLink } from "react-router-hash-link";
import paymentImg from "../images/payments.f8a603e8.png";
import { Link } from "react-router-dom";

const DesktopFooter = () => {
  return (
    <div className=" mt-14 md:mt-56 hidden lg:block bg-secondary text-slate-200">
      <hr className=" h-1 bg-primary w-full" />
      <div className=" ">
        <Layout>
          <div className=" space-y-5 pt-5 md:pt-24">
            <div className=" grid grid-cols-1 lg:grid-cols-3 justify-between items-start">
              <div className=" flex flex-col space-y-5">
                <h2 className="text-2xl font-semibold">
                  <span className="text-primary">Port</span>folio
                </h2>
                <div className=" flex items-center gap-2">
                  <MapPinIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Mymensingh, Bangladesh
                  </h4>
                </div>
                <div className=" flex items-center gap-2">
                  <EnvelopeIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Official:{" "}
                    <NavLink className=" hover:underline">
                      shakilahmmed252@gmail.com
                    </NavLink>
                  </h4>
                </div>
                <div className=" flex items-center gap-2">
                  <PhoneIcon className=" h-5 w-5" />
                  <h4 className=" text-lg font-medium">
                    Helpline:
                    <NavLink className=" hover:underline mx-1">
                      +88 01796282969
                    </NavLink>
                  </h4>
                </div>
              </div>
              <div className="hidden md:flex justify-start md:justify-center py-10 md:py-0  ">
                <div className=" flex flex-col space-y-3">
                  <h2 className="text-xl font-semibold text-left">
                    <span className="text-primary">Useful Links</span>
                  </h2>
                  <NavLink
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    to={"/#projects"}
                    className=" hover:underline text-left"
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    to={"/#about"}
                    className=" hover:underline text-left"
                  >
                    About
                  </NavLink>
                  <NavLink
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    to={"/#blogs"}
                    className=" hover:underline text-left"
                  >
                    Blogs
                  </NavLink>
                </div>
              </div>
              <div className=" mt-14 md:mt-0 flex flex-col items-start md:items-center">
                <div className=" flex flex-col justify-start space-y-5">
                  <h2 className="text-xl font-semibold text-left">
                    <span className="text-primary">Social Media Link</span>
                  </h2>
                  <div className=" grid grid-cols-5 gap-2">
                    <Link to={`https://wa.me/8801796282969`} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#25D366"
                          d="M4.868,42.974l2.945-10.791c-1.803-3.118-2.841-6.734-2.841-10.559c0-11.468,9.334-20.801,20.802-20.801 s20.802,9.333,20.802,20.801S37.141,42.426,25.673,42.426c-3.548,0-6.879-0.916-9.752-2.519L4.868,42.974z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M25.673,6.822c-9.665,0-17.501,7.835-17.501,17.501c0,3.585,1.088,6.924,2.945,9.752 l-1.937,7.107l7.277-1.909c2.759,1.617,5.913,2.564,9.217,2.564c9.666,0,17.502-7.835,17.502-17.501 C43.174,14.657,35.338,6.822,25.673,6.822 M25.673,3c12.426,0,22.5,10.075,22.5,22.5S38.099,48,25.673,48 c-3.944,0-7.637-1.012-10.87-2.784l-12.368,3.247l3.368-12.336C3.807,33.004,2.001,28.423,2.001,24 C2.001,13.075,12.075,3,25.673,3L25.673,3z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M37.659,29.204c-0.617-0.309-3.658-1.808-4.223-2.009c-0.565-0.201-0.975-0.309-1.384,0.309 c-0.408,0.617-1.594,2.009-1.956,2.419c-0.361,0.411-0.723,0.463-1.34,0.155c-0.617-0.309-2.605-0.96-4.962-3.065 c-1.836-1.636-3.074-3.655-3.432-4.273c-0.361-0.617-0.039-0.951,0.27-1.26c0.278-0.278,0.617-0.721,0.926-1.082 c0.309-0.361,0.412-0.617,0.617-1.03c0.206-0.411,0.103-0.772-0.052-1.082c-0.155-0.309-1.384-3.341-1.896-4.579 c-0.498-1.201-1.008-1.039-1.384-1.039c-0.361,0-0.772-0.052-1.186-0.052c-0.411,0-1.082,0.155-1.648,0.772 c-0.566,0.617-2.17,2.123-2.17,5.182c0,3.059,2.221,6.014,2.53,6.423c0.309,0.412,4.366,6.661,10.567,9.336 C33.22,31.736,34.6,32.063,35.654,32.323c1.056,0.258,2.007,0.221,2.763,0.135c0.848-0.093,2.605-1.066,2.974-2.094 C38.276,29.823,37.659,29.513,37.659,29.204"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      target="_blank"
                      to={`https://www.linkedin.com/in/shakil-ahmmed-joy/`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to={`https://github.com/ahmmed-shakil`}
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        style={{ fill: "#FFFFFF" }}
                      >
                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <h6 className=" bg-primary shadow-lg text-gray-200 font-medium rounded-md p-3">
                      App Coming Soon!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" h-1 bg-primary w-full" />
            <div className=" hidden md:grid grid-cols-3 items-center justify-between">
              <p>Lisence: Demo lisence</p>
              <p className=" text-center">
                copyright &copy; 2024. Shakil Ahmmed Joy
              </p>
              <p className=" text-right">v 1.0.0</p>
            </div>
            <div className=" grid md:hidden grid-cols-1 items-center justify-between pb-3">
              <p className=" text-center">
                copyright &copy; 2024. Shakil Ahmmed Joy
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default DesktopFooter;
