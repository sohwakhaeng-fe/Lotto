import React, { useState } from "react";
import { ERROR_MESSAGE } from "../../constants/errorMessage";
import { convertToArray } from "../../utils/convert";
import { getLottoWinningResult } from "../../utils/game";
import { hasDuplicateLottoNum } from "../../utils/validate";
import ResultModal from "../ResultModal";

type WinningLottoFormProps = {
  tickets: number[][];
  resetTickets: () => void;
};

const WinningLottoForm = ({ tickets, resetTickets }: WinningLottoFormProps) => {
  const [winningLottoNums, setWinningLottoNums] = useState<number[]>([]);
  const [bonusNum, setBonusNum] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [winningResult, setWinningResult] = useState<[string, number][]>([]);

  const onChangeLottoNum = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    setWinningLottoNums((prev) => {
      const lottoNums = [...prev];

      lottoNums[i] = +e.target.value;

      return lottoNums;
    });
  };

  const onSubmitWinningLottoNum = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasDuplicateLottoNum([bonusNum, ...winningLottoNums], 7))
      return alert(ERROR_MESSAGE["DUPLICATE_NUM"]);

    setIsModalOpen(true);

    const _winningResult = getLottoWinningResult(
      tickets,
      bonusNum,
      winningLottoNums
    );
    setWinningResult(convertToArray(_winningResult));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWinningResult([]);
  };

  const restart = () => {
    setIsModalOpen(false);
    setWinningLottoNums([]);
    setBonusNum(0);
    resetTickets();
  };

  return (
    <>
      <form className="mt-9" onSubmit={onSubmitWinningLottoNum}>
        <label className="flex-auto d-inline-block mb-3">
          지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
        </label>
        <div className="d-flex">
          <div>
            <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
            <div>
              {Array.from({ length: 6 }, (_, i) => (
                <input
                  key={i}
                  type="number"
                  min={1}
                  max={45}
                  required
                  value={winningLottoNums[i] || ""}
                  className="winning-number mx-1 text-center"
                  onChange={(e) => onChangeLottoNum(e, i)}
                />
              ))}
            </div>
          </div>
          <div className="bonus-number-container flex-grow">
            <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
            <div className="d-flex justify-center">
              <input
                type="number"
                min={1}
                max={45}
                required
                value={bonusNum || ""}
                className="bonus-number text-center"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBonusNum(+e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="open-result-modal-button mt-5 btn btn-cyan w-100"
        >
          결과 확인하기
        </button>
      </form>
      {isModalOpen && (
        <ResultModal
          closeModal={closeModal}
          winningResult={winningResult}
          payment={tickets.length * 1000}
          restart={restart}
        />
      )}
    </>
  );
};

export default WinningLottoForm;
function converToArray(arg0: Map<string | number, number>) {
  throw new Error("Function not implemented.");
}
