import React, { useState } from "react";

export default function WinningNumber(props) {
  const { amount, showResult, onShowResult, onWinningNumbersUpdate } = props;
  const [winningNumberList, setWinningNumberList] = useState([]);

  function handleResult(e) {
    e.preventDefault();
    onWinningNumbersUpdate(winningNumberList);
    onShowResult(!showResult);
  }

  function handleWinningNumberList(e, i) {
    const value = parseInt(e.target.value);
    const updatedWinningNumbers = [...winningNumberList];
    if (value >= 1 && value <= 45) {
      updatedWinningNumbers[i] = value;
    } else {
      alert("1~45사이의 숫자를 입력해주세요");
      e.target.value = "";
      updatedWinningNumbers[i] = "";
    }
    setWinningNumberList(updatedWinningNumbers);
  }

  return (
    <form className="mt-9">
      <label className="flex-auto d-inline-block mb-3">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 0)} />
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 1)} />
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 2)} />
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 3)} />
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 4)} />
            <input type="number" className="winning-number mx-1 text-center" min="1" max="45" onChange={(e) => handleWinningNumberList(e, 5)} />
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <input type="number" className="bonus-number text-center" onChange={(e) => handleWinningNumberList(e, 6)} />
          </div>
        </div>
      </div>
      <button type="submit" className="open-result-modal-button mt-5 btn btn-cyan w-100" onClick={handleResult}>
        결과 확인하기
      </button>
    </form>
  );
}
