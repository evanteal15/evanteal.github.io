import React, { useEffect } from "react";
import classNames from "classnames";

const VerticalTimeline = ({
  animate = true,
  className = "",
  layout = "2-columns",
  lineColor = "#FFF",
  children,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--line-color", lineColor);
  }, [lineColor]);

  return (
    <div
      className={classNames(className, "vertical-timeline", {
        "vertical-timeline--animate": animate,
        "vertical-timeline--two-columns": layout === "2-columns",
        "vertical-timeline--one-column-left":
          layout === "1-column" || layout === "1-column-left",
        "vertical-timeline--one-column-right": layout === "1-column-right",
      })}
    >
      {children}
    </div>
  );
};

export { VerticalTimeline };
