import React, { useEffect, useState } from "react";

export default function BuyList(props) {
  const { amount, setUserLootoNumberList } = props;
  const [showLottoNumbers, setShowLottoNumbers] = useState(false);
  const [lottoNumbersList, setLottoNumbersList] = useState([]);

  useEffect(() => {
    const newLottoNumbersList = [];
    for (let i = 0; i < amount / 1000; i++) {
      const newLottoNumbers = lottoNumberMaker();
      newLottoNumbersList.push(newLottoNumbers);
    }
    setLottoNumbersList(newLottoNumbersList);
    setUserLootoNumberList(newLottoNumbersList);
  }, [amount]);

  function lottoNumberMaker() {
    const lottoNumber = [];
    while (lottoNumber.length < 6) {
      let randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!lottoNumber.includes(randomNumber)) {
        lottoNumber.push(randomNumber);
      }
    }
    return lottoNumber;
  }

  function handleToggleNumbers() {
    setShowLottoNumbers(!showLottoNumbers);
  }

  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">총 {amount / 1000}개를 구매하였습니다.</label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input type="checkbox" className="lotto-numbers-toggle-button" onChange={handleToggleNumbers} />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {lottoNumbersList.map((lottoNumbers, index) => (
          <div key={index} className="mx-2 ticket-container">
            <span className="text-4xl">🎟️</span>
            {lottoNumbers.map((number) => (
              <span key={number} className="mx-1 text-xl" style={{ display: showLottoNumbers ? "inline" : "none" }}>
                {number}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
