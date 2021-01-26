import React, {
    createContext,
    useEffect,
    useState,
  } from "react";

export const GameContext = createContext();
const initialSquares = Array(9).fill(null);

const GameProvider = ({children, oIsNext}) => {

    const [ history, setHistory ] = useState([{squares:initialSquares}]);
    const [ stepNumber, setStepNumber ] = useState(0);
    const [ xIsNext, setXIsNext ] = useState(!oIsNext);
    const [ winner, setWinner ] = useState(null);


    const getCurrentSquares = (history, stepNumber) => {
      return history[stepNumber].squares.slice();
    }

    const handleClick = (i) => {

        const squares = getCurrentSquares(history, stepNumber);
        if (winner || squares[i]) {
          return;
        }

        squares[i] = xIsNext ? "X" : "O";
        setHistory(
          history.slice(0, stepNumber + 1).concat([
                  {squares}
              ])
          );
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === (oIsNext ? 1 : 0));
      }

    useEffect(() => {
      jumpTo(history.length - 1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[history]);

    useEffect(() => {
      const squares = getCurrentSquares(history, stepNumber);
      setWinner(calculateWinner(squares))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[stepNumber]);


    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      return (
        <GameContext.Provider value={{winner, xIsNext, jumpTo, handleClick, history, stepNumber}} >
          {children}
        </GameContext.Provider>
      );

};

export default GameProvider;