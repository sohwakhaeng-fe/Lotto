import Input from "../Input";
import Button from "../Button";
import {  useState } from "react";

const LottoPurchase = ({ onPurchasePriceChange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const newPurchasePrice = parseInt(inputValue);
    onPurchasePriceChange(newPurchasePrice);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <label htmlFor="price" className="mb-2 d-inline-block">
        구입할 금액을 입력해주세요.
      </label>
      <div className="d-flex">
        <Input inputValue={inputValue} priceInput handleChange={handleChange} />
        <Button type="submit">확인</Button>
      </div>
    </form>
  );
};

export default LottoPurchase;
