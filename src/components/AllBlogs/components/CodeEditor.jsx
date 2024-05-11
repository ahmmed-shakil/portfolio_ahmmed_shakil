import React, { useEffect, useState } from "react";
import Line from "../../shared/Line";
import Typography from "../../shared/Typography/Typography";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid";

const CodeEditor = ({ title, children }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }, [copied]);
  return (
    <div className=" bg-slate-600 rounded-md text-slate-300">
      <div className=" px-4 pt-4 pb-2 flex justify-between items-center cursor-pointer">
        <div className="  flex justify-start items-center gap-0">
          <div className=" flex justify-start items-center gap-2">
            <div className=" bg-red-500 w-3 h-3 rounded-full"></div>
            <div className=" bg-third w-3 h-3 rounded-full"></div>
            <div className=" bg-primary w-3 h-3 rounded-full"></div>
            <div></div>
            <div></div>
          </div>
          <Typography>{title}</Typography>
        </div>
        {/* {copied ? (
          <div className=" flex justify-end items-center gap-1">
            <ClipboardDocumentCheckIcon
              height={20}
              width={20}
              className="text-primary"
            />
            <Typography className=" text-sm text-primary">Copied!</Typography>
          </div>
        ) : (
          <ClipboardDocumentIcon
            height={20}
            width={20}
            onClick={() => {
              setCopied(true);
            }}
          />
        )} */}
      </div>
      <Line prop={"w-full mb-4 h-1 bg-slate-500"} />
      <div className=" px-4 pb-8">{children}</div>
    </div>
  );
};

export default CodeEditor;
