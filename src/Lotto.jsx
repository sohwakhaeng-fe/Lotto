import React from "react";
import PurchaseAmount from "./component/PurchaseAmount";
import BuyList from "./component/BuyList";
import WinningNumber from "./component/WinningNumber";

export default function Lotto() {
  return (
    <div class="d-flex justify-center mt-5">
      <div class="w-100">
        <h1 class="text-center">🎱 행운의 로또</h1>
        <PurchaseAmount />
        <BuyList />
        <WinningNumber />
      </div>
    </div>
  );
}
