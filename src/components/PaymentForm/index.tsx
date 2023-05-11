import React from "react";

const PaymentForm = () => {
  return (
    <form className="mt-5">
      <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
      <div className="d-flex">
        <input
          type="number"
          className="w-100 mr-2 pl-2"
          placeholder="구입 금액"
        />
        <button type="button" className="btn btn-cyan">
          확인
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
