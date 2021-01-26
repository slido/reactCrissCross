import React from 'react';
import Square from './Square';


function Board () {
    const renderSquare = (i) => {
        return (
          <Square
            index={i}
            key={i}
          />
        );
      } 

      return (
          [0,1,2].map((rowIndex) => (
          <div key={rowIndex}>
            {[0,1,2].map((columnIndex) => {
              const squareIndex = rowIndex * 3 + columnIndex;
              return renderSquare(squareIndex);
              })}
          </div>))
        
      );

}

export default Board;