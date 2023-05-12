import React, { useState } from "react";

const LottoTicket = ({ lottoTicketNumbers, LottoTicketList }) => {
  const [showNumber, setShowNumber] = useState(false);
  const lottoTicketNumbersArray = Array.from(
    { length: lottoTicketNumbers },
    (_, i) => i + 1
  );
  const handleToggle = () => {
    setShowNumber((prevShowNumber) => !prevShowNumber);
  };

  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">
          총 {lottoTicketNumbers}개를 구매하였습니다.
        </label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input
              type="checkbox"
              className="lotto-numbers-toggle-button"
              onChange={handleToggle}
            />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {showNumber
          ? LottoTicketList.map((lottoNumbers, index) => (
              <div key={index} className="w-100 mx-1 text-4xl">
                <span key={index} className="mx-1 text-4xl">
                  🎟️
                </span>
                {lottoNumbers.map((number, index) => (
                  <span key={index}>
                    {number}
                    {index !== lottoNumbers.length - 1 && " "}
                  </span>
                ))}
              </div>
            ))
          : lottoTicketNumbersArray.map((number) => (
              <span key={number} className="mx-1 text-4xl">
                🎟️
              </span>
            ))}
      </div>
    </section>
  );
};

export default LottoTicket;
