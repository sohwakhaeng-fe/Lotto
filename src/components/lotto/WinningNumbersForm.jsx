import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Modal from "../Modal";

const WinningNumbersForm = ({
  LottoTicketList,
  lastWinningNumber,
  handleChange,
  handleReset,
  isModalOpen,
  handleToggleModal,
}) => {
  const isDataComplete = () => {
    return (
      lastWinningNumber.winningNums.every((num) => num !== "") &&
      lastWinningNumber.bonusNum !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDataComplete()) {
      handleToggleModal(true);
    } else {
      alert("모든 입력 값을 입력해주세요!");
    }
  };

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <label className="flex-auto d-inline-block mb-3">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="d-flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨번호 </h4>
          <div>
            {lastWinningNumber.winningNums.map((number, index) => {
              return (
                <Input
                  key={index}
                  inputValue={number}
                  handleChange={(e) => handleChange(e, index)}
                />
              );
            })}
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="d-flex justify-center">
            <Input
              inputValue={lastWinningNumber.bonusNum}
              handleChange={(e) => handleChange(e, 6)}
            />
          </div>
        </div>
      </div>

      <Button type="submit" className={"open-result-modal-button mt-5 w-100"}>
        결과 확인하기
      </Button>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          lastWinningNumber={lastWinningNumber}
          LottoTicketList={LottoTicketList}
          handleToggleModal={handleToggleModal}
          handleReset={handleReset}
        />
      )}
    </form>
  );
};

export default WinningNumbersForm;
