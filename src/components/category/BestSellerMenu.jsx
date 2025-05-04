import React from 'react';
import { bestSellerData } from '../../menuData/bestSellerData';

const BestSellerMenu = ({ onItemClick }) => {
  return (
    <div className='menu_cont_01 menu_default'>
      <ul className='menu_list'>
        {bestSellerData.map((item) => (
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

export default BestSellerMenu;