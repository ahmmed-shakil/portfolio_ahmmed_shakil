import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-60%)" },
    config: { duration: 60000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key} style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
