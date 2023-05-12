import React from "react";

const Input = ({ priceInput, handleChange, inputValue }) => {

  return priceInput ? (
    <input
      id="price"
      type="number"
      className="w-100 mr-2 pl-2"
      placeholder="구입 금액"
      value={inputValue}
      onChange={handleChange}
      min={1000}
      max={100000}
    />
  ) : (
    <input
      type="number"
      className="winning-number mx-1 text-center"
      value={inputValue}
      onChange={handleChange}
      min={1}
      max={45}
    />
  );
};

export default Input;
