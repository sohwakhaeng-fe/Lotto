import { useEffect, useState } from "react";
import LottoPurchase from "./components/lotto/LottoPurchase";
import LottoTicket from "./components/lotto/LottoTicket";
import WinningNumbersForm from "./components/lotto/WinningNumbersForm";
import "./index.css";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const purchaseNumber = purchasePrice / 1000;

  console.log(purchaseNumber);
  const [LottoTicketList, setLottoTicketList] = useState(
    Array.from({ length: purchaseNumber }, () => null)
  );

  const handlePurchasePriceChange = (newPurchasePrice) => {
    setPurchasePrice(newPurchasePrice);
  };
  console.log(purchasePrice);

  const generateLottoNumber = () => {
    const array = Array.from({ length: 45 }, (_, i) => i + 1);
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      lottoNumbers.push(array[randomIndex]);
      array.splice(randomIndex, 1); //중복선택 피하기
    }
    return lottoNumbers.sort((a, b) => a - b);
  };

  // useEffect(() => {
  //   setLottoTicketList();
  // }, []);
  console.log("LottoTicketList", LottoTicketList);
  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <LottoPurchase onPurchasePriceChange={handlePurchasePriceChange} />
          <LottoTicket
            lottoTicketNumbers={purchaseNumber}
            LottoTicketList={LottoTicketList}
          />
          <WinningNumbersForm
            LottoTicketList={LottoTicketList}
            setLottoTicketList={setLottoTicketList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
