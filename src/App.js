import './App.css';
import React, {
  useState,
  useContext,
  useEffect
} from "react";
import Game from './components/Game';
import { SetupContext } from './contexts/SetupContext';
import ModalC from './components/Modal';
import  GameProvider  from './contexts/GameContext';
function App() {

  const { gameStates } = useContext(SetupContext);
  const [ showModalButton, setShowModalButton] = useState(false);

  const renderGame = (gameState, index) => {
    
    const isLastGame = index + 1 === gameStates.length ;

    return (
      <GameProvider oIsNext={gameState.oIsNext}  key={index}>
        <Game
          onUpdate={(winner) => { if (isLastGame) { setShowModalButton(!!winner)} }}
        />
      </GameProvider>
    );

  }

  return (
      <div className="App">
            {gameStates.map(renderGame)}
            <ModalC showButton={showModalButton}></ModalC>
        </div>
          
  )
}

export default App;
