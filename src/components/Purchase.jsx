import { useEffect, useState } from 'react';
import Numbering from "./Numbering";

const Purchase = ({ handleTickets, tickets, isReset }) => {
  const [priceInput, setPriceInput] = useState();
  // const [count, setCount] = useState();

  const handleChange = (e) => {
    setPriceInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(Math.floor(Number(priceInput) / 1000));
    // handleTickets(count);

    const ticketCount = Math.floor(Number(priceInput) / 1000);
    handleTickets(ticketCount);
  };

  const resetState = () => {
    setPriceInput("");
  };

  useEffect(() => {
    if (isReset) {
      resetState();
    }
  }, [isReset]);

  return (
    <>
      <form
        className="mt-5"
        onSubmit={handleSubmit}
      >
        <label className="mb-2 d-inline-block">
          구입할 금액을 입력해주세요.
        </label>
        <div className="d-flex">
          <input
            type="number"
            className="w-100 mr-2 pl-2"
            placeholder="구입 금액"
            value={priceInput}
            onChange={handleChange}
            disabled={tickets.length > 0}
          />
          <button
            type="submit"
            className="btn btn-cyan"
            onClick={handleSubmit}
            disabled={tickets.length > 0}
          >
            확인
          </button>
        </div>
      </form>
    </>
  );
};

export default Purchase