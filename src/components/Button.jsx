import React from "react";

const Button = ({ children, className }) => {
  return (
    <button type="button" className={`btn btn-cyan ${className}`}>
      {children}
    </button>
  );
};

export default Button;
