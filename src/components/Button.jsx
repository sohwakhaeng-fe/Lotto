import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-cyan ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
