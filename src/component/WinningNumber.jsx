import React from "react";

export default function WinningNumber() {
  return (
    <form className="mt-9">
      <label className="flex-auto d-inline-block mb-3">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <input type="number" className="winning-number mx-1 text-center" />
            <input type="number" className="winning-number mx-1 text-center" />
            <input type="number" className="winning-number mx-1 text-center" />
            <input type="number" className="winning-number mx-1 text-center" />
            <input type="number" className="winning-number mx-1 text-center" />
            <input type="number" className="winning-number mx-1 text-center" />
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <input type="number" className="bonus-number text-center" />
          </div>
        </div>
      </div>
      <button type="button" className="open-result-modal-button mt-5 btn btn-cyan w-100">
        결과 확인하기
      </button>
    </form>
  );
}
