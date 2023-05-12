import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
// LottoPurchase 컴포넌트에서 로또 구매 금액을 입력받고, 금액에 해당하는 로또 티켓을 생성하세요.
// 로또 티켓 가격은 1,000원이라고 가정합니다.
// const [purchasePrice, setPurchasePrice] = useState(0);

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
        <Input value={inputValue} priceInput handleChange={handleChange} />
        <Button>확인</Button>
      </div>
    </form>
  );
};

export default LottoPurchase;
