import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import TicketInfoBox from "./components/TicketInfoBox";
import WinningLottoForm from "./components/WinningLottoForm";
import { generateTickets } from "./utils/ticket";
import "./index.css";

function App() {
  const [tickets, setTickets] = useState<number[][]>([]);

  const resetTickets = () => {
    setTickets([]);
  };
  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PaymentForm
            generateTickets={(count) => setTickets(generateTickets(count))}
          />
          <TicketInfoBox tickets={tickets} />
          <WinningLottoForm tickets={tickets} resetTickets={resetTickets} />
        </div>
      </div>
    </div>
  );
}

export default App;
