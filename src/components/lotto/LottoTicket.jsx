import React from "react";

const LottoTicket = () => {
  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">총 5개를 구매하였습니다.</label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input type="checkbox" className="lotto-numbers-toggle-button" />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <span className="mx-1 text-4xl">🎟️ </span>
        <span className="mx-1 text-4xl">🎟️ </span>
        <span className="mx-1 text-4xl">🎟️ </span>
        <span className="mx-1 text-4xl">🎟️ </span>
        <span className="mx-1 text-4xl">🎟️ </span>
      </div>
    </section>
  );
};

export default LottoTicket;
