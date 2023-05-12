import { useState } from "react";
import LottoPurchase from "./components/lotto/LottoPurchase";
import LottoTicket from "./components/lotto/LottoTicket";
import WinningNumbersForm from "./components/lotto/WinningNumbersForm";
import "./index.css";
import { generateLottoNumber } from "./utils/lotto";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [LottoTicketList, setLottoTicketList] = useState([]);
  const handlePurchasePriceChange = (newPurchasePrice) => {
    setPurchasePrice(newPurchasePrice);
    const newPurchaseNumber = newPurchasePrice / 1000;
    const newLottoTicketList = Array.from({ length: newPurchaseNumber }, () =>
      generateLottoNumber()
    );
    setLottoTicketList(newLottoTicketList);
  };

  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <LottoPurchase onPurchasePriceChange={handlePurchasePriceChange} />
          <LottoTicket LottoTicketList={LottoTicketList} />
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
