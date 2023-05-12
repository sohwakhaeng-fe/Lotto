const LottoWinningNumber = ({ winNumber, handleChange, checkResult}) => {
    return (
        <form className="mt-9">
            <label className="flex-auto d-inline-block mb-3">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
            <div className="d-flex">
              <div>
                <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  {winNumber.map((number, index) => {
                    if (index !== 6) return <input key={index} type="number" className="winning-number mx-1 text-center" name={index} value={winNumber[index]} onChange={handleChange}/>
                  })}
                </div>
              </div>
              <div className="bonus-number-container flex-grow">
                <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
                <div className="d-flex justify-center">
                  <input type="number" className="bonus-number text-center" name="6" value={winNumber[6]} onChange={handleChange}/>
                </div>
              </div>
            </div>
            <button type="button" className="open-result-modal-button mt-5 btn btn-cyan w-100" onClick={checkResult}>
              결과 확인하기
            </button>
        </form>
    )
}

export default LottoWinningNumber;