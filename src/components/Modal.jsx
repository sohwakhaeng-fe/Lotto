import { useEffect, useState } from "react";

const Modal = ({ LottoTicketList, lastWinningNumber }) => {
  const [ranks, setRanks] = useState([]);
  const [rankCounts, setRankCounts] = useState({});
  const [profitRate, setProfitRate] = useState(0);

  const getMatchCount = (ticket, winningNums, bonusNum) => {
    let matchCount = ticket.filter((num) => winningNums.includes(num)).length;
    let bonusMatch = ticket.includes(bonusNum) ? 1 : 0;
    return { matchCount, bonusMatch };
  };

  let getRank = (matchCount, bonusMatch) => {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && bonusMatch === 1) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return "No rank";
  };

  const calculateRanks = () => {
    return LottoTicketList.map((ticket) => {
      const { matchCount, bonusMatch } = getMatchCount(
        ticket,
        lastWinningNumber.winningNums,
        lastWinningNumber.bonusNum
      );
      return getRank(matchCount, bonusMatch);
    });
  };

  const calculateRankCounts = () => {
    let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, "No rank": 0 };
    ranks.forEach((rank) => {
      counts[rank]++;
    });
    return counts;
  };

  const calculateProfitRate = (rankCounts) => {
    const ticketPrice = 1000;
    const purchaseAmount = LottoTicketList.length * ticketPrice;

    let totalPrize = 0;
    totalPrize += rankCounts[1] * 2000000000; // 1등 당첨금
    totalPrize += rankCounts[2] * 30000000; // 2등 당첨금
    totalPrize += rankCounts[3] * 1500000; // 3등 당첨금
    totalPrize += rankCounts[4] * 50000; // 4등 당첨금
    totalPrize += rankCounts[5] * 5000; // 5등 당첨금

    const profitRate = (totalPrize / purchaseAmount) * 100; // 수익률 계산

    return profitRate;
  };

  useEffect(() => {
    setRanks(calculateRanks());
  }, [LottoTicketList, lastWinningNumber]);

  useEffect(() => {
    setRankCounts(calculateRankCounts());
    setProfitRate(calculateProfitRate(rankCounts));
  }, [ranks]);

  console.log("profitRate", profitRate);
  return (
    <>
      <div className="modal-open">
        <div className="modal-inner p-10">
          <div className="modal-close">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          <h2 className="text-center">🏆 당첨 통계 🏆</h2>
          <div className="d-flex justify-center">
            <table className="result-table border-collapse border border-black">
              <thead>
                <tr className="text-center">
                  <th className="p-3">일치 갯수</th>
                  <th className="p-3">당첨금</th>
                  <th className="p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-3">3개</td>
                  <td className="p-3">5,000</td>
                  <td className="p-3">{rankCounts[5]}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">4개</td>
                  <td className="p-3">50,000</td>
                  <td className="p-3">{rankCounts[4]}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개</td>
                  <td className="p-3">1,500,000</td>
                  <td className="p-3">{rankCounts[3]}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개 + 보너스볼</td>
                  <td className="p-3">30,000,000</td>
                  <td className="p-3">{rankCounts[2]}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">6개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td className="p-3">{rankCounts[1]}개</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center font-bold">당신의 총 수익률은 %입니다.</p>
          <div className="d-flex justify-center mt-5">
            <button type="button" className="btn btn-cyan">
              다시 시작하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
