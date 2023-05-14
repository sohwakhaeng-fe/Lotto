import "./index.css";
import { useState } from "react";
import Purchase from "./components/Purchase";
import Numbering from "./components/Numbering";
import WinningNumber from "./components/WinningNumber";
import ResultModal from "./components/ResultModal";

function App() {
  const [tickets, setTickets] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNumbers = () => {
    return Math.floor(Math.random() * 45) + 1;
  };

  const generateLottoNumbers = () => {
    const randomNumbers = new Set();
    while (randomNumbers.size < 6) {
      randomNumbers.add(getNumbers());
    }
    return Array.from(randomNumbers).sort((a, b) => a - b);
  };

  const handleTickets = (ticketCount) => {
    setTickets(Array.from({ length: ticketCount }, generateLottoNumbers));
    handleIsModalOpen();
  };

  const handleWinningNumbers = (winningNumbers) => {
    setWinningNumbers(winningNumbers);
    handleIsModalOpen();
  };

  const handleBonusNumber = (bonusNumber) => {
    setBonusNumber(bonusNumber);
    handleIsModalOpen();
  };

  const handleIsModalOpen = () => {
    setIsModalOpen(
      tickets.length > 0 && winningNumbers.length > 0 && bonusNumber > 0
    );
  };

  const isReset = winningNumbers.length === 0 && bonusNumber === 0;

  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <Purchase
            handleTickets={handleTickets}
            tickets={tickets}
            isReset={isReset}
          />
          {tickets.length > 0 && (
            <>
              <Numbering tickets={tickets} />
              <WinningNumber
                handleWinningNumbers={handleWinningNumbers}
                handleBonusNumber={handleBonusNumber}
                isReset={isReset}
              />
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <ResultModal
          tickets={tickets}
          winningNumbers={winningNumbers}
          bonusNumber={bonusNumber}
        />
      )}
    </div>
  );
}

export default App;
