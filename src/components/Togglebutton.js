import React, { useState, useEffect } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState(false);

  const toggle = (e) => {
    setToggleState(!toggleState);
    props.status(!toggleState);
  };

  useEffect(() => {
    if (props.buttonStatus == "true") {
      setToggleState(true);
    }
  }, [props.buttonStatus]);

  return (
    <div className={`switch ${toggleState ? "on" : "off"}`} onClick={toggle} />
  );
}
