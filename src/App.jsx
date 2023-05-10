import { useState } from "react";
import "./index.css";

function App() {

  const [price, setPrice] = useState("");

  const [numbers, setNumbers] = useState([]);

  const [winNumber, setWinNumber] = useState(Array.from(Array(7), () => ""));

  const [isView, setIsView] = useState(false);

  const [isModal, setIsModal] = useState(false);

  const [totalWin, setTotalWin] = useState({
    3: 0,
    4: 0,
    5: 0,
    bonus: 0,
    6: 0,
  });

  const sum = ((totalWin[3] * 5000 + totalWin[4] * 50000 + totalWin[5] * 1500000 + totalWin["bonus"] * 30000000 + totalWin[6] * 2000000000) - price) / price * 100 ;

  // 로또 구매 (자동 구매)
  const buyLotto = () => {
    
    const newNumbers = Array.from(Array(Math.floor(price / 1000)), () => {
      const list = [];
      let i = 0;
      
      while (i < 6) {
        const n = Math.floor(Math.random() * 45 + 1)
        console.log("테스트 1");
        if (!list.includes(n)) {
          console.log("테스트 2");
          list.push(n);
          i++
        } else {
          console.log("중복");
        }
      }
      return list;
    })
    console.log(newNumbers);
    setNumbers(newNumbers)
  }

  // 결과 확인
  const checkResult = () => {
    console.log(numbers);

    const results = numbers.map((number) => winNumber.filter((v, i) => {
      if (i !== 6) return number.includes(v)
      else return false
      
    }))

    console.log(results);

    results.map((result, index) => {
      if (result.length === 5 && numbers[index].includes(winNumber[6])) {
        setTotalWin(prev => {
          const newTotalWin = {...prev}
          newTotalWin["bonus"] += 1
          return newTotalWin;
        })
      } else {
        setTotalWin(prev => {
          const newTotalWin = {...prev}
          newTotalWin[result.length] += 1
          return newTotalWin;
        })
      }
    })

    setIsModal(true);
  }

  // 당첨 번호 바인딩
  const handleChange = (e) => {
    // console.log(e.target.name + e.target.value);
    setWinNumber(prev => {
      const newWinNumber = [...prev];
      newWinNumber[Number(e.target.name)] = Number(e.target.value)
      console.log(newWinNumber);
      return newWinNumber;
    })
  }

  // 다시 시작
  const reset = () => {
    setIsModal(false);
    setPrice("");
    setNumbers([]);
    setTotalWin({
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    });
    setWinNumber(Array.from(Array(7), () => ""));
  }

  // 모달 닫기
  const close = () => {
    setTotalWin({
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    });
    setIsModal(false);
  }

  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <form className="mt-5">
            <label className="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
            <div className="d-flex">
              <input type="number" className="w-100 mr-2 pl-2" placeholder="구입 금액" value={price} onChange={e => setPrice(e.target.value)} onSubmit={buyLotto}/>
              <button type="button" className="btn btn-cyan" onClick={buyLotto}>
                확인
              </button>
            </div>
          </form>
          <section className="mt-9">
            <div className="d-flex">
              <label className="flex-auto my-0">총 {price && numbers.length !== 0 ? Math.floor(price / 1000) : 0}개를 구매하였습니다.</label>
              <div className="flex-auto d-flex justify-end pr-1">
                <label className="switch">
                  <input type="checkbox" className="lotto-numbers-toggle-button" onChange={() => setIsView(!isView)}/>
                  <span className="text-base font-normal">번호보기</span>
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              {numbers.map((number, index) => <span className="mx-1 text-4xl" style={{display: "flex"}} key={index}>🎟️ {isView && number.map((v, i) => <div key={i} className="number-box">{v}</div>)} </span>)}
            </div>
          </section>
          <form className="mt-9">
            <label className="flex-auto d-inline-block mb-3">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
            <div className="d-flex">
              <div>
                <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  <input type="number" className="winning-number mx-1 text-center" name="0" value={winNumber[0]} onChange={handleChange}/>
                  <input type="number" className="winning-number mx-1 text-center" name="1" value={winNumber[1]} onChange={handleChange}/>
                  <input type="number" className="winning-number mx-1 text-center" name="2" value={winNumber[2]} onChange={handleChange}/>
                  <input type="number" className="winning-number mx-1 text-center" name="3" value={winNumber[3]} onChange={handleChange}/>
                  <input type="number" className="winning-number mx-1 text-center" name="4" value={winNumber[4]} onChange={handleChange}/>
                  <input type="number" className="winning-number mx-1 text-center" name="5" value={winNumber[5]} onChange={handleChange}/>
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
        </div>
      </div>

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
    </div>
  );
}

export default App;
