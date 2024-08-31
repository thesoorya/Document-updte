import React, { useContext } from 'react';
import './Common.css';
import { StoreContext } from '../context/Store';

const Documents = () => {
  const { personDocuments } = useContext(StoreContext);

  return (
    <div className='documentContainer'>
      <p>documents</p>
      <ul>
        {
          personDocuments?.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Documents;
