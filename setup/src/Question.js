import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  // statr value for the button
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {/* ternary operator for the icons */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
