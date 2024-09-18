import React, { useState } from 'react';
import './Popup.css'

function Popup({ content, onClose }) {
    const [selectedSize,setSelectedSize] = useState('.large');
    const [selectedNut,setSelectedNut] = useState('.large');

    const sizeClick = (size) => {
        selectedSize(size);
        selectedNut(size);
    }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>
       
        
        <div className='popup_wrap'>
        <img src={content.image} alt={content.title} />
            <div className='menu_cont_right'>
            <h4>{content.title}</h4>
            <p className='desc'>{content.description}</p>
            <p className='price'>{content.price}</p>
            <p className='kcal'>{content.kcal}</p>
            <p className='warning'>{content.warning}</p>
            <div className='size_btn'>
                <button className={`.large ${selectedSize === '.large' ? '.active' : ''}`} 
                onClick={ () => sizeClick('.large')}>L</button>
                <button className={`jumbo ${selectedSize === '.jumbo' ? 'active' : ''}`} 
                onClick={ () => sizeClick('.jumbo')}>J</button>
            </div>
            { selectedNut === '.large' && (
            <div className='nutritional_cont'>
                  <div className='cont_01'>
                    <p>일회제공량 {content.size}</p>
                    <p>당류 {content.sugar}</p>
                    <p>단백질 {content.protein}</p>
                  </div>
                
                <div className='cont_02'>
                        <p>포화지방 {content.fat}</p>
                        <p>나트륨 {content.natrium}</p>
                        <p>카페인 {content.caffeine}</p>
                </div>
        </div>
            )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
