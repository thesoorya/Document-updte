import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const Store = ({ children }) => {
    const [inputValue, setInputValue] = useState('');
    const [close, setClose] = useState(false);
    const [heading, setHeading] = useState('');
    const [details, setDetails] = useState([]);
    const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
    const [personDocuments, setPersonDocuments] = useState(null);

    function handlePersonSubmit(e) {
        e.preventDefault();
        if (inputValue.length === 0) {
            return;
        }
        setDetails([...details, { name: inputValue, document: [] }])
        setInputValue('');
        setClose(false);
    }

    function handleDocumentSubmit(i) {
        return (e) => {
            e.preventDefault();
            setSelectedPersonIndex(i);
            setHeading('documents');
            setClose(true);
        };
    }

    const submitDocument = (e) => {
        e.preventDefault();
        if (inputValue.length === 0 || selectedPersonIndex === null) {
            return;
        }

        const updatedDetails = [...details];
        updatedDetails[selectedPersonIndex].document.push(inputValue);
        setDetails(updatedDetails);
        setInputValue('');
        setClose(false);
        setHeading('');
        setSelectedPersonIndex(null);
    };

    function handleShowDocuments(i) {
        setSelectedPersonIndex(i);
        setPersonDocuments(details[i].document); 
    }

    const content = {
        inputValue,
        setInputValue,
        close,
        setClose,
        heading,
        setHeading,
        details,
        setDetails,
        handlePersonSubmit,
        handleDocumentSubmit,
        submitDocument,
        handleShowDocuments,
        personDocuments
    };

    return (
        <StoreContext.Provider value={content}>
            {children}
        </StoreContext.Provider>
    );
};

export default Store;
