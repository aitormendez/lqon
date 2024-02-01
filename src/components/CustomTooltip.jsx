// src/components/Tooltip.jsx
import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = ({ id, content, children }) => {
  return (
    <>
      <div
        className="inline cursor-pointer"
        data-tooltip-id={id}
        data-tooltip-content={content}
      >
        {children}
      </div>
      <Tooltip id={id} />
    </>
  );
};

export default CustomTooltip;
