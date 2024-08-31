import React, { useContext } from 'react';
import './Modal.css';
import { StoreContext } from '../context/Store';

const Modal = () => {
    const {
        inputValue,
        setInputValue,
        close,
        setClose,
        heading,
        details,
        handlePersonSubmit,
        submitDocument
    } = useContext(StoreContext);

    function handleModalClose() {
        setClose(false);
    }

    // console.log(details);


    return (
        <div>
            {close && (
                <div className='modal'>
                    <div className='form'>
                        <div className='x' onClick={handleModalClose}>x</div>
                        <h1>{heading}</h1>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Enter Field'
                        />
                        {heading === 'person' ? (
                            <button onClick={handlePersonSubmit}>Submit</button>
                        ) : (
                            <button onClick={submitDocument}>Submit</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
