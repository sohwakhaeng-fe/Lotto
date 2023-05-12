import React from "react";
import { PRIZE } from "../../constants/initValue";
import { WinningResultType } from "../../types";
import { getEarningRate } from "../../utils/earning";
import TableRow from "./BodyTableRow";

type ResultModalProps = {
  closeModal: () => void;
  winningResult: [string, number][];
  payment: number;
  restart: () => void;
};

const ResultModal = ({
  closeModal,
  winningResult,
  payment,
  restart,
}: ResultModalProps) => {
  return (
    <div className="modal">
      <div className="modal-inner p-10">
        <div className="modal-close" onClick={closeModal}>
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
              {winningResult.map(([_rank, ticketCount], i) => {
                const rank = _rank as keyof WinningResultType;

                return (
                  <TableRow
                    key={i}
                    matchedNumCount={PRIZE[rank].title}
                    prize={PRIZE[rank].prize}
                    ticketCount={ticketCount}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-center font-bold">
          당신의 총 수익률은 {getEarningRate(winningResult, payment)}%입니다.
        </p>
        <div className="d-flex justify-center mt-5">
          <button type="button" className="btn btn-cyan" onClick={restart}>
            다시 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
