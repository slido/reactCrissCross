import React, {useContext} from 'react';
import Modal from 'react-modal';
import Dropdown from './Dropdown';
import { SetupContext } from '../contexts/SetupContext';

import 'react-dropdown/style.css';

function ModalC (props){

    const setupContext = useContext(SetupContext);

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#E0EEEE'      
        }
    };

    return(
        <>
           { 
           props.showButton && 
           <button 
                onClick={() => {setupContext.setModalIsOpenToTrue()}} >
                Do you want to play another game of criss cross?
            </button>
            }
            <Modal 
                isOpen={setupContext.modalIsOpen}
                style={customStyles}
                ariaHideApp={false}>
                    <button onClick={() => {setupContext.setModalIsOpenToFalse()}}>x</button>
                    <label>With what player should next game start?</label>
                    <Dropdown></Dropdown>
            </Modal>
        </>
    )
}
export default ModalC;