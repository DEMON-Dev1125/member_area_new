import React from "react";
import clsx from "clsx";
import Switch from "@material-ui/core/Switch";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const SwitchComponent = withStyles((theme) => ({
  root: {
    width: 400,
    height: 60,
    padding: 0,
    overflow: "unset",
  },
  switchBase: {
    padding: 1,
    transform: "translateX(0px)",
    transition: "0.8s",
    "&$checked": {
      transform: "translateX(200px)",
      transition: "0.8s",
      color: "#0779E4",
      "& + $track": {
        backgroundColor: "#12263F0D",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#0779E4",
    },
  },
  thumb: {
    width: 200,
    height: 60,
    borderRadius: "10px",
    color: "#0779E4",
  },
  track: {
    borderRadius: 10,
    backgroundColor: "#12263F0D",
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const useStyles = makeStyles({
  root: {
    position: "relative",
    fontSize: "24px",
    color: "#88929E",
  },
  leftText: {
    width: "200px",
    height: "60px",
    position: "absolute",
    left: "0px",
    zIndex: 10,
    textAlign: "center",
    cursor: "pointer",
  },
  leftTextLabel: {
    marginTop: "10px",
    cursor: "pointer",
  },
  rightText: {
    width: "200px",
    height: "60px",
    position: "absolute",
    left: "200px",
    zIndex: 10,
    textAlign: "center",
    cursor: "pointer",
  },
  rightTextLabel: {
    marginTop: "10px",
    cursor: "pointer",
  },
  textWhite: {
    color: "white",
  },
});
export default function CustomSwitch(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(false);
  const onClickTrue = () => {
    setValue(true);
    props.onChange(true);
  };
  const onClickFalse = () => {
    setValue(false);
    props.onChange(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftText} onClick={onClickFalse}>
        <label
          className={clsx(
            classes.leftTextLabel,
            value ? "" : classes.textWhite
          )}
        >
          Aluno
        </label>
      </div>
      <div className={classes.rightText} onClick={onClickTrue}>
        <label
          className={clsx(
            classes.rightTextLabel,
            value ? classes.textWhite : ""
          )}
        >
          Colaborador
        </label>
      </div>
      <SwitchComponent checked={value} name="cheched" />
    </div>
  );
}
