import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Select, Tag } from "antd";
import { render } from "@testing-library/react";
import "./../assets/css/login.css";

const options = [
  { value: "gold" },
  { value: "lime" },
  { value: "green" },
  { value: "cyan" },
];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={value}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export default function SelectAnt() {
  return (
    <Select
      tagRender={tagRender}
      showArrow={true}
      mode="tags"
      defaultValue={["gold", "cyan"]}
      style={{ width: "398px", height: "89px" }}
      options={options}
    />
  );
}
