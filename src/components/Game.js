import React from 'react';
import GameProvider from '../contexts/GameContext';
import Board from './Board';
import History from './History';

function Game () {

    return (
      <GameProvider oIsNext={false}>
        <div className="game">
            <div className="game-board">
              <Board/>
            </div>
            <div className="game-info">
              <History/>
            </div>
          </div>
      </GameProvider>
    );
  
}

export default Game;