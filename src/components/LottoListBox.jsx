const LottoListBox = ({ numbers, price, isView, setIsView }) => {
    return (
        <section className="mt-9">
            <div className="d-flex">
              <label className="flex-auto my-0">총 {price && numbers.length !== 0 ? Math.floor(price / 1000) : 0}개를 구매하였습니다.</label>
              <div className="flex-auto d-flex justify-end pr-1">
                <label className="switch">
                  <input type="checkbox" className="lotto-numbers-toggle-button" onChange={() => setIsView(!isView)} checked={isView}/>
                  <span className="text-base font-normal">번호보기</span>
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              {numbers.map((number, index) => <span className="mx-1 text-4xl" style={{display: "flex"}} key={index}><div className="ticket">🎟️</div> {isView && number.map((v, i) => <div key={i} className="number-box">{v}</div>)} </span>)}
            </div>
        </section>
    )
}

export default LottoListBox;