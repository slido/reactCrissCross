import React, {useContext, useState, useEffect} from 'react';
import { GameContext } from '../contexts/GameContext';

function Moves() {

    const {history, jumpTo } = useContext(GameContext);
    const [moves, setMoves ] = useState([]);

    useEffect(() => {
        setMoves(history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        }))
      },[history, jumpTo]);

    return (
        <ol>{moves}</ol>
    );
  }

export default Moves;