import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Modal from "../Modal";

const WinningNumbersForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <form className="mt-9">
      <label className="flex-auto d-inline-block mb-3">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨번호 </h4>
          <div>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <input type="number" className="bonus-number text-center" />
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className={"open-result-modal-button mt-5 w-100"}
      >
        결과 확인하기
      </Button>
      {isModalOpen && <Modal />}
    </form>
  );
};

export default WinningNumbersForm;
