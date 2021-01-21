import React, {useContext, useState, useEffect} from 'react';
import { GameContext } from '../contexts/GameContext';

function Status() {

    const {winner, xIsNext} = useContext(GameContext);

    const [status, setStatus] = useState('');

    useEffect(() => {
      setStatus(
        winner ? `Winner: ${winner}`: `Next player: ${xIsNext ? "X" : "O"}`
      )
    },[winner, xIsNext])

    return (
        <div>{status}</div>
    );
  }

export default Status;