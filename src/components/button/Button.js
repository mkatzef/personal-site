import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, useful=false}) {
  return (
    <div className={className}>
      <a className={useful ? "main-button nonuseless-button": "main-button"} href={href} target={newTab && "_blank"} rel={newTab && "noopener noreferrer"}>
        {text}
      </a>
    </div>
  );
}
