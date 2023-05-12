import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-cyan ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
