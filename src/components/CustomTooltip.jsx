// src/components/Tooltip.jsx
import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = ({ id, content, children }) => {
  return (
    <>
      <div
        className="inline cursor-pointer"
        data-tooltip-id={id}
        data-tooltip-html={content}
        data-tooltip-class-name="max-w-80"
        style={{ maxWidth: "300px" }}
      >
        {children}
      </div>
      <Tooltip id={id} />
    </>
  );
};

export default CustomTooltip;
