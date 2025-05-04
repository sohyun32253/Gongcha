import React, { useState } from 'react';
import '../Menu.css';
import Popup from './Popup';
import NewMenu from './category/NewMenu';
import BestSellerMenu from './category/BestSellerMenu';
import MillkTeaMenu from './category/MillkTeaMenu';
import SmoothieMenu from './category/SmoothieMenu';
import OriginalTeaMenu from './category/OriginalTeaMenu';
import FruitTeaMenu from './category/FruitTeaMenu';
import RtdMenu from './category/RtdMenu';
import CoffeeMenu from './category/CoffeeMenu';


function MenuDrink() {
  const [selectedCategory, setSelectedCategory] = useState('NEW 시즌메뉴');
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleButtonClick = (item) => {
    setSelectedMenu(item);
  };

  const handleClosePopup = () => {
    setSelectedMenu(null);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'NEW 시즌메뉴':
        return <NewMenu onItemClick={handleButtonClick} />;
      case '베스트셀러':
        return <BestSellerMenu onItemClick={handleButtonClick} />;
      case '밀크티':
        return <MillkTeaMenu onItemClick={handleButtonClick} />;
      case '스무디':
        return <SmoothieMenu onItemClick={handleButtonClick} />;
      case '오리지널 티':
        return <OriginalTeaMenu onItemClick={handleButtonClick} />;
      case '프룻티&모어':
        return <FruitTeaMenu onItemClick={handleButtonClick} />;
      case 'RTD':
        return <RtdMenu onItemClick={handleButtonClick} />;
      case '커피':
        return <CoffeeMenu onItemClick={handleButtonClick} />;
      default:
        return null;
    }
  };

  return (
    <main className='menu'>
      <div className='menu_banner_wrap'>
        <div className='menu_banner'>
          <div className='menu_banner_cont'>
            <h2>음료</h2>
            <p>공차의 다양한 음료를 소개합니다.</p>
          </div>
        </div>
      </div>

      <div className='menu_gnb'>
        <ul>
          {['NEW 시즌메뉴', '베스트셀러', '밀크티', '스무디', '오리지널 티', '프룻티&모어', 'RTD', '커피'].map((category) => (
            <li key={category}>
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='change_menu_cont'>
        <h3>{selectedCategory}</h3>
        {renderCategoryComponent()}
      </div>

      {selectedMenu && <Popup content={selectedMenu} onClose={handleClosePopup} />}
    </main>
  );
}

export default MenuDrink;
