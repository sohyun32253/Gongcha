import React from 'react';
import { originalTeaData } from '../../menuData/originalTeaData';

const OriginalTeaMenu = ({ onItemClick }) => {
  return (
    <div className='menu_cont_01 menu_default'>
      <ul>
        {originalTeaData.map((item) => (
          <li key={item.id}>
            <button onClick={() => onItemClick(item)}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OriginalTeaMenu;