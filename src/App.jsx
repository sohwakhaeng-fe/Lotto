import { useState } from "react";
import LottoPurchase from "./components/lotto/LottoPurchase";
import LottoTicket from "./components/lotto/LottoTicket";
import WinningNumbersForm from "./components/lotto/WinningNumbersForm";
import "./index.css";
import { generateLottoNumber } from "./utils/lotto";

function App() {
  const [lottoTicketList, setLottoTicketList] = useState([]);
  const [lastWinningNumber, setLastWinningNumber] = useState({
    winningNums: Array(6).fill(""),
    bonusNum: "",
  });
  const [showNumber, setShowNumber] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchasePriceChange = (newPurchasePrice) => {
    const newPurchaseNumber = newPurchasePrice / 1000;
    const newLottoTicketList = Array.from(
      { length: newPurchaseNumber },
      generateLottoNumber
    );
    setLottoTicketList(newLottoTicketList);
  };

  const handleToggleNumber = () => {
    setShowNumber((prevShowNumber) => !prevShowNumber);
  };

  const handleChange = (e, index) => {
    const value = parseInt(e.target.value, 10);

    const isValidNumber = value >= 1 && value <= 45;
    if (!isValidNumber) {
      alert("1~45 사이의 숫자를 입력해주세요!");
      return;
    }
    setLastWinningNumber((prevState) => {
      let updatedWinningNum = [...prevState.winningNums];
      let updatedBonusNum = prevState.bonusNum;
      if (index === 6) {
        updatedBonusNum = value;
      } else {
        updatedWinningNum[index] = value;
      }
      return {
        ...prevState,
        winningNums: updatedWinningNum,
        bonusNum: updatedBonusNum,
      };
    });
  };

  const handleReset = () => {
    setLastWinningNumber({
      winningNums: Array(6).fill(""),
      bonusNum: "",
    });
    setLottoTicketList([]);
    setShowNumber(false);
    setIsModalOpen(false);
  };

  const handleToggleModal = (newModalState) => {
    setIsModalOpen(newModalState);
  };

  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <LottoPurchase onPurchasePriceChange={handlePurchasePriceChange} />
          <LottoTicket
            LottoTicketList={lottoTicketList}
            showNumber={showNumber}
            handleToggleNumber={handleToggleNumber}
          />
          <WinningNumbersForm
            LottoTicketList={lottoTicketList}
            lastWinningNumber={lastWinningNumber}
            handleChange={handleChange}
            handleReset={handleReset}
            isModalOpen={isModalOpen}
            handleToggleModal={handleToggleModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
