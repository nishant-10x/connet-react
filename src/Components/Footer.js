import React from "react";
import { GAME_STATE_PLAYING } from "../Constant";


const Footer = ({onNewGAmeClick, onSuggestClick,disabled, gameState}) => {
  return (
    <div className="panel footer">
      {
        gameState === GAME_STATE_PLAYING &&       <button onClick={onSuggestClick}> Suggest</button>

      }{
        gameState !== GAME_STATE_PLAYING &&       <button onClick={onNewGAmeClick} > New Game</button>

      }
    </div>
  );
};

export default Footer;
