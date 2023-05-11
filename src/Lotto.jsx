import React, { useState } from "react";
import PurchaseAmount from "./component/PurchaseAmount";
import BuyList from "./component/BuyList";
import WinningNumber from "./component/WinningNumber";

export default function Lotto() {
  const [amount, setAmount] = useState("");

  function handleAmountChange(value) {
    setAmount(value);
  }

  return (
    <div className="d-flex justify-center mt-5">
      <div className="w-100">
        <h1 className="text-center">🎱 행운의 로또</h1>
        <PurchaseAmount amount={amount} onAmountChange={handleAmountChange} />
        <BuyList amount={amount} />
        <WinningNumber />
      </div>
    </div>
  );
}
