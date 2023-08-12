import React from "react";
import "../Game.css";

const onClick = (ev, id) => {
  alert("on click" + id);
};

const GameCircle = ({ id,  children ,className, onCircleClicked}) => {
  return (
    <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
      
      {children}
    </div>
    
  );
};

export default GameCircle;
