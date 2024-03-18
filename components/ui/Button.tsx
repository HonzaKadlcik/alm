"use client";

import { Properties } from "csstype";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
}

const Button = ({
  type,
  text,
  onClick,
}: buttonProps) => {
  return (
    <div className="mainbutton">
      <button
        onClick={onClick}
        type={type}
        className="mainbutton"
      >
        {text}
      </button>
      </div>
  );
};

export default Button;
