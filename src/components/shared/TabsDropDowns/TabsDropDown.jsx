import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import Typography from "../Typography/Typography";
import {
  ArrowDownOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";

const TabsDropDown = ({ className, data, text, expandClass, setState }) => {
  console.log("🚀 ~ TabsDropDown ~ data:", data);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    setState(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(data[0]);
    setState(data[0]);
  }, [data.length]);
  return (
    <Layout>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={` rounded-md border p-2 h-12 flex justify-evenly items-center ${className}`}
      >
        <Typography className=" font-semibold text-xl">
          {selectedItem ? selectedItem.title : text}
        </Typography>
        {isOpen ? (
          <ChevronUpIcon height={20} width={20} />
        ) : (
          <ChevronDownIcon height={20} width={20} />
        )}
      </div>
      {isOpen && (
        <div
          ref={dropDownRef}
          className={`absolute right-7 left-7 bg-slate-200 shadow-lg rounded-md dark:bg-slate-800 p-3 ${expandClass}`}
        >
          {data.map((item, index) => (
            <div
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(false);
              }}
              key={index}
              className={`my-2 rounded-md p-1 flex items-center justify-center  ${
                selectedItem.title === item.title
                  ? "bg-primary text-slate-200"
                  : "bg-slate-300 dark:bg-slate-700"
              }`}
            >
              <Typography className=" text-lg font-semibold">
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default TabsDropDown;
