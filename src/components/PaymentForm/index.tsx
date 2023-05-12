import React, { useState } from "react";
import { isValidPaymentUnit } from "../../utils/validate";

type PaymentFormProps = {
  generateTickets: (count: number) => void;
};

const PaymentForm = ({ generateTickets }: PaymentFormProps) => {
  const [payment, setPayment] = useState(0);

  const onChangePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(+e.target.value);
  };

  const onSubmitPaymentForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidPaymentUnit(payment)) return;

    generateTickets(payment / 1000);
  };

  return (
    <form className="mt-5" onSubmit={onSubmitPaymentForm}>
      <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
      <div className="d-flex">
        <input
          type="number"
          className="w-100 mr-2 pl-2"
          placeholder="구입 금액"
          value={payment === 0 ? "" : payment}
          onChange={onChangePayment}
          required
          min={1000}
          max={100000}
        />
        <button type="submit" className="btn btn-cyan">
          확인
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
