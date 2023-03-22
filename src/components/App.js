import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [money, setMoney] = useState(50)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => setSushis(sushis))
  }, [])

  function removeSushi(sushi) {
    setEatenSushi([...eatenSushi, sushi])
    if(money > sushi.price) {
      setMoney(money => money -= sushi.price)
    } else {
      alert("Not enough money chump!")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} removeSushi={removeSushi} />
      <Table sushi={eatenSushi} money={money}/>
    </div>
  );
}

export default App;
