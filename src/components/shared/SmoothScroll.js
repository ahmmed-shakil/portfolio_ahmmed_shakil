import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const SmoothScroll = ({ targetId, children, bottom = 0 }) => {
  const scrollRef = useRef(null);

  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const scrollY =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }
  };

  return (
    <animated.div
      ref={scrollRef}
      onClick={scrollToSection}
      style={{
        cursor: "pointer",
        position: "absolute",
        bottom: bottom,
        left: "50%", // Center the element horizontally
        transform: "translateX(-50%)",
      }}
      className={"z-20"}
    >
      {children}
    </animated.div>
  );
};

export default SmoothScroll;
