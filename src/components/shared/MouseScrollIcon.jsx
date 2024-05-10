import React from "react";
import "./MouseScrollIcon.css"; // Import the CSS file for styles

const MouseScrollIcon = ({ prop }) => {
  return (
    <div className="mouse-scroll-icon">
      <svg
        width="30"
        height="50"
        viewBox="0 0 30 50"
        className={`mouse ${prop}`}
      >
        <path
          d="M15 0C6.71572 0 0 6.71572 0 15V35C0 43.2843 6.71572 50 15 50C23.2843 50 30 43.2843 30 35V15C30 6.71572 23.2843 0 15 0ZM15 47.5C8.09703 47.5 2.5 41.903 2.5 35V15C2.5 8.09703 8.09703 2.5 15 2.5C21.903 2.5 27.5 8.09703 27.5 15V35C27.5 41.903 21.903 47.5 15 47.5Z"
          fill="currentColor"
        />
        <circle cx="15" cy="10" r="2.5" className="dot" />
      </svg>
    </div>
  );
};

export default MouseScrollIcon;
