import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, removeSushi }) {
  const [initialIndex, setInitialIndex] = useState(0)
  const [index, setIndex] = useState(4)


  function onClick() {
    setInitialIndex(initialIndex => initialIndex +=4)
    setIndex(index => index += 4)
  }



  const sushisOnTable = sushis.slice(initialIndex, index).map(sushi => (
    <Sushi 
      key={sushi.id} 
      sushi={sushi}
      name={sushi.name} 
      img={sushi.img_url} 
      price={sushi.price}
      removeSushi={removeSushi}
    />
  ))

  return (
    <div className="belt">
      {sushisOnTable}
      <MoreButton onClick={onClick}/>
    </div>
  );
}

export default SushiContainer;
