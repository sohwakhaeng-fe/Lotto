import React, { useState } from "react";

export default function PurchaseAmount(props) {
  const { amount, onAmountChange, handleAmountUpdate } = props;
  const [curAmount, setCurAmount] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setCurAmount(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (curAmount < 1000 || curAmount === "") {
      alert("nope");
    }
    // 유저가 입력한 금액을 상위 컴포넌트의 amount값을 바꾸자
    onAmountChange(curAmount);
    handleAmountUpdate(curAmount);
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
      <div className="d-flex">
        <input type="number" className="w-100 mr-2 pl-2" placeholder="구입 금액" value={curAmount} onChange={handleChange} />
        <button type="submit" className="btn btn-cyan">
          확인
        </button>
      </div>
    </form>
  );
}
