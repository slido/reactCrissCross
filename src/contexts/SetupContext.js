import React, {
    createContext,
    useState,
  } from "react";

export const SetupContext = createContext();

const SetupProvider = ({children}) => {

    const [ gameStates, setGameStates ] = useState([
        { oIsNext: false }
      ]);


    const [items, setItems] = useState([
      { label: "X First", value: "x"},
      { label: "O First", value: "o" },
      { label: "Random", value: "r" }
    ]);

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const setModalIsOpenToTrue = () =>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () =>{
        setModalIsOpen(false)
    }

    
    const random = () => {
      const players = ["true", "false"];
      return Math.floor(Math.random() * players.length);
    };
    

    const handleAddrTypeChange = (e) => {

      switch (e.currentTarget.value) {
        case 'x':
            setGameStates([...gameStates, { oIsNext: false }]);
            break;
    
        case 'o':
            setGameStates([...gameStates, { oIsNext: true }]);
            break;

        case 'r':
            setGameStates([...gameStates, { oIsNext: random() }]);
            break;
    
        default:
            // do nothing
    }

      
      setModalIsOpenToFalse();
    }

    return (
      <SetupContext.Provider value={{ gameStates, items, handleAddrTypeChange, modalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse }} >
        {children}
      </SetupContext.Provider>
    );

};

export default SetupProvider;