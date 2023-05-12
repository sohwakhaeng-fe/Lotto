const LottoBuyForm = ({ price, buyLotto, setPrice, onSubmit}) =>  {

    return (
        <>
            <h1 className="text-center">🎱 행운의 로또</h1>
            <form className="mt-5" onSubmit={onSubmit}>
            <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
            <div className="d-flex">
                <input type="number" className="w-100 mr-2 pl-2" placeholder="구입 금액" value={price} onChange={e => setPrice(e.target.value)} onSubmit={buyLotto}/>
                <button type="button" className="btn btn-cyan" onClick={buyLotto}>
                확인
                </button>
            </div>
            </form>
        </>
    )
}

export default LottoBuyForm;