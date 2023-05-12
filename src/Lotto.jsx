import React, { useState } from "react";
import PurchaseAmount from "./component/PurchaseAmount";
import BuyList from "./component/BuyList";
import WinningNumber from "./component/WinningNumber";

export default function Lotto(props) {
  const { showResult, onShowResult } = props;
  const [amount, setAmount] = useState("");
  // user의 랜덤로또번호저장 리스트
  const [userLottoNumberList, setUserLootoNumberList] = useState([]);
  // 당첨번호 저장 리스트
  const [winningNumbers, setWinningNumbers] = useState([]);

  // amount값 최신화
  function handleAmountChange(value) {
    setAmount(value);
  }

  function handleAmountUpdate(amount) {
    console.log(amount);
  }

  function handleWinningNumbersUpdate(winningNumberList) {
    setWinningNumbers(winningNumberList);
    // 과연 업데이트를 할 필요가 있을까? 이 함수로 바로 당첨자를 판별하면 되지 않을까?
    console.log("winningNumberList :>> ", winningNumberList);
    console.log("userLottoNumberList :>> ", userLottoNumberList);
    judgeWinner(winningNumberList, userLottoNumberList);
  }

  // 판별함수
  function judgeWinner(winningNumbers, userNumbers) {}

  return (
    <div className="d-flex justify-center mt-5">
      <div className="w-100">
        <h1 className="text-center">🎱 행운의 로또</h1>
        <PurchaseAmount amount={amount} onAmountChange={handleAmountChange} handleAmountUpdate={handleAmountUpdate} />
        <BuyList amount={amount} setUserLootoNumberList={setUserLootoNumberList} />
        <WinningNumber amount={amount} showResult={showResult} onShowResult={onShowResult} onWinningNumbersUpdate={handleWinningNumbersUpdate} />
      </div>
    </div>
  );
}
