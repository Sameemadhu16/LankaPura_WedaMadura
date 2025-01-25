// File: src/ui/3d-card.js

import React from "react";
import classNames from "classnames"; // Optional: For conditional class handling

// CardContainer component
export function CardContainer({ children, className, ...props }) {
  return (
    <div
      className={classNames(
        "relative perspective-1000", // Add your base styles here
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// CardBody component
export function CardBody({ children, className, ...props }) {
  return (
    <div
      className={classNames(
        "transform transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// CardItem component
export function CardItem({ children, className, translateZ = 0, as: Component = "div", ...props }) {
  return (
    <Component
      style={{ transform: `translateZ(${translateZ}px)` }}
      className={classNames("relative", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
