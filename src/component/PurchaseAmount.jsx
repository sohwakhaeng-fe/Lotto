import React, { useState } from "react";

export default function PurchaseAmount(props) {
  const { setAmount } = props;
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (inputValue % 1000 !== 0) {
      alert("1000000원 이하의 금액을 1000원단위로 입력해주세요");
    }
    setAmount(inputValue);
  }

  return (
    <form className="mt-5" onClick={handleClick}>
      <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
      <div className="d-flex">
        <input type="number" max={1000000} className="w-100 mr-2 pl-2" placeholder="구입 금액" onChange={(e) => handleInput(e)} />
        <button type="submit" className="btn btn-cyan">
          확인
        </button>
      </div>
    </form>
  );
}
