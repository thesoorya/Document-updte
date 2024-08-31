import React, { useContext } from "react";
import "./Common.css";
import { StoreContext } from "../context/Store";

const Persons = () => {
  const { close, setClose, setHeading, details, handleDocumentSubmit, handleShowDocuments, personDocuments } = useContext(StoreContext);

  function handleModal() {
    setClose(!close);
    setHeading("person");
  }

  console.log(details);
  console.log(personDocuments);

  return (
    <div className="personContainer">
      <p>People</p>
      <button onClick={handleModal} className="personAddBtn">ADD</button>

      <div className="persons">
        {details.map((item, i) => (
          <ul key={i}>
            <li onClick={() => handleShowDocuments(i)}>{item.name}</li>
            <button onClick={handleDocumentSubmit(i)}>+</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Persons;
