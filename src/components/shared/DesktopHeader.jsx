import React from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { NavLink, useLocation } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {
  EnvelopeIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const DesktopHeader = () => {
  const { pathname } = useLocation();
  return (
    <div
      className="hidden md:block sticky bg-slate-800 text-slate-200 top-0 shadow"
      style={{ zIndex: 2 }}
    >
      <Layout>
        <div className=" flex items-center gap-10">
          <div className=" flex items-center pt-1 mb-2">
            <NavLink
              className="flex justify-center gap-1 items-center"
              to={"/"}
            >
              <PhoneIcon width={12} height={12} />
              <p className="text-xs hover:opacity-75">+8801796282969</p>
            </NavLink>
          </div>
          <div className=" flex items-center pt-1 mb-2">
            <NavLink
              className="flex justify-center gap-1 items-center"
              to={"/"}
            >
              <EnvelopeIcon width={12} height={12} />
              <p className="text-xs hover:opacity-75">
                shakilahmmed252@gmail.com
              </p>
            </NavLink>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className=" grid grid-cols-header pb-5">
          <div className="flex items-center justify-between">
            <NavLink to={"/"}>
              <h2 className="text-4xl font-semibold">
                <span className="text-primary">Port</span>folio
              </h2>
            </NavLink>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <div className=" py-2 px-3 h-10">
              <Switcher />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
