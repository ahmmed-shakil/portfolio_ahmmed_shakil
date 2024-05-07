import React from "react";

const ButtonPrimary = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-gray-200 px-3 py-2 rounded-md mt-4 transition-all delay-200 shadow hover:shadow-lg hover:bg-transparent border-transparent border-solid border-2 hover:border-primary hover:text-primary hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
