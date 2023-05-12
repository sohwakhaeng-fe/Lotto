import { useState } from "react";
import "./index.css";
import LottoBuyForm from "./components/LottoBuyForm";
import LottoListBox from "./components/LottoListBox";
import LottoWinningNumber from "./components/LottoWinningNumber";
import ResultModal from "./components/ResultModal";

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
  const buyLotto = (e) => {

    e.preventDefault();
    
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
  const checkResult = (e) => {
    console.log(numbers);

    e.preventDefault();

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
    setIsView(false)
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

  const handleSubmit = () => {
    
  }

  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <LottoBuyForm buyLotto={buyLotto} price={price} setPrice={setPrice} onSubmit={buyLotto}/>
          <LottoListBox numbers={numbers} price={price} isView={isView} setIsView={setIsView}/>
          <LottoWinningNumber winNumber={winNumber} handleChange={handleChange} checkResult={checkResult}/>
        </div>
      </div>
      <ResultModal isModal={isModal} totalWin={totalWin} sum={sum} reset={reset} close={close}/>
    </div>
  );
}

export default App;
