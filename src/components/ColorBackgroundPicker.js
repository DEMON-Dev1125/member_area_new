import React, { useState, useEffect } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

export default function ColorBackgroundPicker(props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: "0", g: "0", b: "0", a: "1" });

  const styles = reactCSS({
    default: {
      color: {
        width: "50px",
        height: "50px",
        // borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
    props.colorChange(color.rgb);
  };

  useEffect(() => {
    if (props.colorBackground) {
      let colorBackground = props.colorBackground;
      let colorArray = colorBackground.split(",");
      setColor({r: colorArray[0], g: colorArray[1], b: colorArray[2], a: colorArray[3]});
    }
  }, [props.colorBackground]);

  return (
    <div>
      <button
        type="button"
        className="mr-2 btn_black"
        onClick={handleClick}
        style={styles.color}
      ></button>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}
