import React, {useContext, useEffect} from 'react';
import GameProvider from '../contexts/GameContext';
import Board from './Board';
import History from './History';
import { GameContext } from '../contexts/GameContext';

function Game (props) {

  const {winner} = useContext(GameContext);

  useEffect(() => {
    props.onUpdate(winner)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

    return (
    
        <div className="game">
            <div className="game-board">
              <Board/>
            </div>
            <div className="game-info">
              <History/>
            </div>
          </div>


    );
  
}

export default Game;