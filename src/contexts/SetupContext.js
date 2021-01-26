import React, {
    createContext,
    useEffect,
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
      const players = ["x", "o"];
      return Math.floor(Math.random() * players.length);
    };
    

      const handleAddrTypeChange = (e) => {
        console.log(e.currentTarget.value);

        setGameStates([...gameStates, { oIsNext: false }]);
        
        setModalIsOpenToFalse();
    }

      return (
        <SetupContext.Provider value={{ gameStates, items, handleAddrTypeChange, modalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse }} >
          {children}
        </SetupContext.Provider>
      );

};

export default SetupProvider;