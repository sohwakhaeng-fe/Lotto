import Lotto from "./Lotto";
import LottoModal from "./LottoModal";
import { useState } from "react";

function LottoGame() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div id="app" className="p-3">
      <Lotto showResult={showResult} onShowResult={setShowResult} />
      {showResult && <LottoModal showResult={showResult} setShowResult={setShowResult} />}
    </div>
  );
}
export default LottoGame;
