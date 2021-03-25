import React, { useState } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState(false);

  const toggle = (e) => {
    setToggleState(!toggleState);
    props.status(!toggleState);
  };

  return <div className={`switch ${toggleState ? "on" : "off"}`} onClick={toggle} />;
}
