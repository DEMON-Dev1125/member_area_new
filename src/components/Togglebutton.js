import React, { useState } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState("off");

  const toggle = (e) => {
    // setToggleState(toggleState === "on" ? "off" : "on");
    setToggleState(toggleState === "off" && "on");
    const toggleState = e.target.selected;
    // console.log("---------", toggleState);
    props.toogleStatus(toggleState);
  };

  return <div className={`switch ${toggleState}`} onCliconk={toggle} />;
}
