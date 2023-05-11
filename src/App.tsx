import React from "react";
import PaymentForm from "./components/PaymentForm";
import TicketInfoBox from "./components/TicketInfoBox";
import WinningLottoForm from "./components/WinningLottoForm";
import "./index.css";

function App() {
  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PaymentForm />
          <TicketInfoBox />
          <WinningLottoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
