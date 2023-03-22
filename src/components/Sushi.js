import React, { useState } from "react";

function Sushi({ sushi, name, img, price, removeSushi }) {
  const [eaten, setEaten] = useState(false)

  function onSushiClick() {
    setEaten(eaten => !eaten)
    removeSushi(sushi)
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={onSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
