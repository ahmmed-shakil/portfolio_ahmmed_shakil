import React, { useEffect, useState } from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { Layout } from "./Layout/Layout";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  EnvelopeIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import TextScroller from "./TextScroller/TextScroller";
import { scrollToTop } from "../../utils/scrollToTop";

const DesktopHeader = () => {
  const { pathname } = useLocation();
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText("+8801796282969");
      setPhoneCopied(true);
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  };
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("shakilahmmed252@gmail.com");
      setEmailCopied(true);
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      emailCopied && setEmailCopied(false);
    }, 2000);
  }, [emailCopied]);
  useEffect(() => {
    setTimeout(() => {
      phoneCopied && setPhoneCopied(false);
    }, 2000);
  }, [phoneCopied]);
  return (
    <div
      className={`hidden lg:block sticky bg-slate-800 text-slate-200 top-0 shadow`}
      style={{ zIndex: 999 }}
    >
      <div className=" py-2 bg-primary">
        <TextScroller
          text={
            "I am an ambitious, self-motivated, quick learner and able to work with minimum supervision under tight schedules with an aptitude for learning new technology. "
          }
        />
      </div>
      <Layout>
        <div className=" flex items-center gap-10">
          <div className=" flex items-center pt-1 mb-2">
            <div
              className="flex justify-center gap-1 items-center"
              onClick={handlePhoneClick}
            >
              <PhoneIcon width={12} height={12} />
              <p className="text-xs hover:opacity-75 cursor-pointer">
                +8801796282969
              </p>
              {!phoneCopied ? (
                <ClipboardDocumentIcon
                  width={12}
                  height={12}
                  className=" cursor-pointer hover:text-primary"
                />
              ) : (
                <div className=" flex gap-1 justify-center items-center">
                  <ClipboardDocumentCheckIcon
                    width={12}
                    height={12}
                    className=" text-primary"
                  />
                  {/* <p className=" text-primary text-xs">Copied!</p> */}
                </div>
              )}
            </div>
          </div>
          <div
            className=" flex items-center pt-1 mb-2"
            onClick={handleEmailClick}
          >
            <div className="flex justify-center gap-1 items-center">
              <EnvelopeIcon width={12} height={12} />
              <p className="text-xs hover:opacity-75 cursor-pointer">
                shakilahmmed252@gmail.com
              </p>
              {/* ClipboardDocumentIcon */}
              {!emailCopied ? (
                <ClipboardDocumentIcon
                  width={12}
                  height={12}
                  className=" cursor-pointer hover:text-primary"
                />
              ) : (
                <div className=" flex gap-1 justify-center items-center">
                  <ClipboardDocumentCheckIcon
                    width={12}
                    height={12}
                    className=" text-primary"
                  />
                  {/* <p className=" text-primary text-xs">Copied!</p> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className=" grid grid-cols-header pb-5">
          <div className="flex items-center justify-between">
            <NavLink onClick={scrollToTop} to={"/"}>
              <h2 className="text-4xl font-semibold">
                <span className="text-primary">Port</span>folio
              </h2>
            </NavLink>
          </div>
          <div className="flex items-center justify-end space-x-4">
            {pages
              ?.filter((page) => page.show)
              .map((page) => {
                // Check if it's a hash link or a regular link
                const isHashLink = page.path.startsWith("/#");

                return isHashLink ? (
                  <NavLink
                    smooth
                    to={page.path}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className={`nav-item ${
                      `/${window.location.hash}` === page.path &&
                      "bg-primary text-white"
                    }`}
                  >
                    {page.value}
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={scrollToTop}
                    to={page.path}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className={`nav-item ${
                      `${pathname}` === "/" &&
                      !window.location.hash &&
                      "bg-primary text-white"
                    }`}
                  >
                    {page.value}
                  </NavLink>
                );
              })}
            <Switcher />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
