import React, {useContext, useEffect, useState} from 'react';
import { GameContext } from '../contexts/GameContext';

function History() {

    const {winner, xIsNext, history, jumpTo } = useContext(GameContext);

    const [status, setStatus] = useState('');
    const [moves, setMoves ] = useState([]);

    useEffect(() => {
      setStatus(
        winner ? `Winner: ${winner}`: `Next player: ${xIsNext ? "X" : "O"}`
      )
    },[winner, xIsNext])
    
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
// todo status i moves separate components
    return (
          <div>
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
      );
}


// kada zavrsim game pokaze se button sa new game, koji izrenda ispod novi game i tako za sljedece
// kada kliknes button, otvori modal sa pitanjem, dali prvi x, o ili random

export default History;