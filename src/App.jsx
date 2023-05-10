import LottoPurchase from "./components/lotto/LottoPurchase";
import LottoTicket from "./components/lotto/LottoTicket";
import WinningNumbersForm from "./components/lotto/WinningNumbersForm";
import "./index.css";

function App() {
  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <LottoPurchase />
          <LottoTicket />
          <WinningNumbersForm />
        </div>
      </div>
    </div>
  );
}

export default App;
