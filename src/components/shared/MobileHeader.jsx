import React, { useState, useEffect, useRef } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import Typography from "./Typography/Typography";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { scrollToTop } from "../../utils/scrollToTop";

const MobileHeader = () => {
  const [show, setShow] = useState(false);
  const mobileMenuRef = useRef(null);

  // Add an event listener to detect clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" block sticky top-0 md:hidden shadow-md z-10">
      <div className=" bg-slate-800 flex justify-between p-4 items-center">
        <Typography className=" text-2xl text-slate-200 font-semibold">
          <span className=" text-primary">Port</span>folio
        </Typography>
        <div className=" flex justify-end items-center gap-4 text-slate-200">
          <Switcher />
          {!show ? (
            <Bars3BottomRightIcon
              onClick={() => setShow(true)}
              height={28}
              width={28}
            />
          ) : (
            <XMarkIcon onClick={() => setShow(false)} height={28} width={28} />
          )}
        </div>
      </div>
      {show && (
        <div
          className=" bg-slate-800 text-slate-200 z-50 p-4 transition-all duration-1000 ease-in-out"
          ref={mobileMenuRef}
          style={{
            right: show ? "0" : "-300px",
            height: "100vh",
            width: "300px",
            position: "absolute",
            transition: "right 1s ease-in-out", // Add transition property to style
          }}
        >
          <div className="flex flex-col items-start space-y-2">
            {pages
              ?.filter((page) => page.show)
              .map((page) => {
                const isHashLink = page.path.startsWith("/#");

                return isHashLink ? (
                  <NavLink
                    key={page.value}
                    smooth
                    to={page.path}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    className={`nav-item ${
                      `/${window.location.hash}` === page.path &&
                      "bg-primary text-slate-50 w-full"
                    }`}
                    onClick={() => setShow(false)}
                  >
                    {page.value}
                  </NavLink>
                ) : (
                  <NavLink
                    key={page.value}
                    onClick={() => {
                      scrollToTop();
                      setShow(false);
                    }}
                    to={page.path}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className={`nav-item ${
                      `/${window.location.hash}` === "/" &&
                      "bg-primary text-white w-full"
                    }`}
                  >
                    {page.value}
                  </NavLink>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
