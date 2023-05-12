import React from "react";

export default function LottoList({ amount }) {
  function lottoNumberMaker() {
    // 빈배열을 만들어서 배열에 넣을꺼다.
    let lottoNumberList = [];
    // 랜덤숫자 만드는거 에 lottoNumberList에 push하겠다.
    while (lottoNumberList.length < 6) {
      let randomNumber = lottoNumberList.push(Math.floor(Math.random() * 45) + 1);

      if (!lottoNumberList.includes(randomNumber)) {
        lottoNumberList.push(randomNumber);
      }
    }
    return lottoNumberList;
  }

  console.log(lottoNumberMaker());
  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">총 {amount / 1000}개를 구매하였습니다.</label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input type="checkbox" className="lotto-numbers-toggle-button" />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <span className="mx-1 text-4xl">🎟️ </span>
      </div>
    </section>
  );
}

// 1. 6개의 랜덤숫자를 만들어야한다.
// 2. 6개의 랜덤숫자를 티켓 옆에 위치시켜야 해요.
