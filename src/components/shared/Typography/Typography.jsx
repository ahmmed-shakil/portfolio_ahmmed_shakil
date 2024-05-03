import React from "react";

const Typography = ({ children, className = "", ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export default Typography;
