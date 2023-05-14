import { useEffect, useState } from "react";

const WinningNumber = ({
  handleWinningNumbers,
  handleBonusNumber,
  isReset,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [winningNumberInputValues, setWinningNumberInputValues] = useState(
    Array.from({ length: 6 }, () => "")
  );
  const [bonusNumberInputValue, setBonusNumberInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWinningNumbers(winningNumberInputValues.map(Number));
    handleBonusNumber(bonusNumberInputValue);

    console.log(bonusNumberInputValue);
  };

  const handleWinningNumberInputChange = ({ target: { name, value } }) => {
    setWinningNumberInputValues(
      winningNumberInputValues.map((inputValue, index) =>
        name.includes(index) ? value : inputValue
      )
    );
    setCurrentValue(value);
  };

  const handleBonusNumberInputChange = (e) => {
    setBonusNumberInputValue(e.target.value);
    setCurrentValue(e.target.value);
  };

  // 1) 7개의 숫자를 모두 입력했는지

  // 2) 중복되는 숫자는 없는지
  const isUniqueNumbers = () => {
    //
  };

  // 3) 0~45 범위 내의 숫자로 이루어져있는지
  const isNumbersInRange = () => {
    //
  };

  return (
    <>
      <form className="mt-9" onSubmit={handleSubmit}>
        <label className="flex-auto d-inline-block mb-3">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div className="d-flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
              <input
                type="number"
                className="winning-number mx-1 text-center"
              />
            </div>
          </div>
          <div className="bonus-number-container flex-grow">
            <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
            <div className="d-flex justify-center">
              <input
                type="number"
                className="bonus-number text-center"
                value={bonusNumberInputValue}
                onChange={handleBonusNumberInputChange}
                onFocus={e => setCurrentValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="open-result-modal-button mt-5 btn btn-cyan w-100"
        >
          결과 확인하기
        </button>
      </form>
    </>
  );
};

export default WinningNumber