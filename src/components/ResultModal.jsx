const ResultModal = ({ isModal, totalWin, sum, reset, close }) => {
    return (
        <div className={isModal ? "modal open" : "modal"}>
        <div className="modal-inner p-10">
          <div className="modal-close" onClick={close}>
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
                  <td className="p-3">{totalWin[3] ? totalWin[3] : 0}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">4개</td>
                  <td className="p-3">50,000</td>
                  <td className="p-3">{totalWin[4] ? totalWin[4] : 0}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개</td>
                  <td className="p-3">1,500,000</td>
                  <td className="p-3">{totalWin[5] ? totalWin[5] : 0}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개 + 보너스볼</td>
                  <td className="p-3">30,000,000</td>
                  <td className="p-3">{totalWin["bonus"] ? totalWin["bonus"] : 0}개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">6개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td className="p-3">{totalWin[6] ? totalWin[6] : 0}개</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center font-bold">당신의 총 수익률은 {Math.floor(sum)}%입니다.</p>
          <div className="d-flex justify-center mt-5">
            <button type="button" className="btn btn-cyan" onClick={reset}>
              다시 시작하기
            </button>
          </div>
        </div>
      </div>
    )
}

export default ResultModal;