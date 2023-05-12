import React from "react";

const Input = ({ priceInput, handleChange, value }) => {
  return priceInput ? (
    <input
      id="price"
      type="number"
      className="w-100 mr-2 pl-2"
      placeholder="구입 금액"
      value={value}
      onChange={handleChange}
    />
  ) : (
    <input type="number" className="winning-number mx-1 text-center" />
  );
};

export default Input;
