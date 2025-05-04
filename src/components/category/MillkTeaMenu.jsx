import React from 'react';
import { milkTeaData } from '../../menuData/milkTeaData';

const MilkTeaMenu = ({ onItemClick }) => {
  return (
    <div className='menu_cont_01 menu_default'>
      <ul className='menu_list'>
        {milkTeaData.map((item) => (
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

export default MilkTeaMenu;