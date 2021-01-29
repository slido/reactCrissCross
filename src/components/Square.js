import React, {useContext} from 'react';
import { GameContext } from '../contexts/GameContext';

function Square(props) {

  const gameContext = useContext(GameContext);
  
    const currentStep = gameContext.history[gameContext.stepNumber];

    if(!currentStep){
      return `Step number ${gameContext.stepNumber} is not valid `
    }

    return (
      <button className="square" onClick={() => { gameContext.handleClick(props.index) }}>
        {currentStep.squares[props.index]}
      </button>
    );
  }

export default Square;