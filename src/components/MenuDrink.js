import React, { useState } from 'react'
import '../Menu.css'
import Popup from './Popup';
import newMenu01 from '../images/new_menu_01.png'
import newMenu02 from '../images/new_menu_02.png'
import newMenu03 from '../images/new_menu_03.png'
import newMenu04 from '../images/new_menu_04.png'
import newMenu05 from '../images/new_menu_05.png'
import newMenu06 from '../images/new_menu_06.png'
import newMenu07 from '../images/new_menu_07.png'
import newMenu08 from '../images/new_menu_08.png'
import newMenu09 from '../images/new_menu_09.png'
import newMenu10 from '../images/new_menu_10.png'
import newMenu11 from '../images/new_menu_11.png'
import newMenu12 from '../images/new_menu_12.png'
import newMenu13 from '../images/new_menu_13.png'
import newMenu14 from '../images/new_menu_14.png'
import newMenu15 from '../images/new_menu_15.png'
import newMenu16 from '../images/new_menu_16.png'
import newMenu17 from '../images/new_menu_17.png'
import newMenu18 from '../images/new_menu_18.png'
import newMenu19 from '../images/new_menu_19.png'
import newMenu20 from '../images/new_menu_20.png'
import newMenu21 from '../images/new_menu_21.png'
import newMenu22 from '../images/new_menu_22.png'
import newMenu23 from '../images/new_menu_23.png'
import newMenu24 from '../images/new_menu_24.png'
import newMenu25 from '../images/new_menu_25.png'
import newMenu26 from '../images/new_menu_26.png'
import newMenu27 from '../images/new_menu_27.png'
import newMenu28 from '../images/new_menu_28.png'
import newMenu29 from '../images/new_menu_29.png'
import newMenu30 from '../images/new_menu_30.png'
import newMenu31 from '../images/new_menu_31.png'
import newMenu32 from '../images/new_menu_32.png'
import newMenu33 from '../images/new_menu_33.png'
import newMenu34 from '../images/new_menu_34.png'
import newMenu35 from '../images/new_menu_35.png'
import newMenu36 from '../images/new_menu_36.png'
import newMenu37 from '../images/new_menu_37.png'
import newMenu38 from '../images/new_menu_38.png'
import newMenu39 from '../images/new_menu_39.png'
import newMenu40 from '../images/new_menu_40.png'
import newMenu41 from '../images/new_menu_41.png'

function MenuDrink() {
    const [selectedMenu,setSelectedMenu] = useState(null);
    const menuItems = [
        { 
          id: 1, 
          title: '빠다 고구마 크림 밀크티', 
          description: '향긋한 블랙티가 들어간 단짠 솔티드 버터고구마에 쫀득한 펄을 더하여 즐기는 시즌한정 밀크티', 
          image: newMenu01, 
          price: '5,100원',
          kcal: '281kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          size:'473ml',
          sugar:'24g',
          protein:'0g',
          fat: '7g',
          natrium: '212mg',
          caffeine: '28mg'
        },
        { 
          id: 2, 
          title: '빠다 고구마 밀크티 + 펄', 
          description: '이것은 빠다 고구마 밀크티 + 펄입니다.', 
          image: newMenu02 
        },
        { 
          id: 3, 
          title: '빠다 고구마 크림 밀크', 
          description: '이것은 빠다 고구마 크림 밀크입니다.', 
          image: newMenu03 
        },
        { 
          id: 4, 
          title: '빠다 고구마 크림 스무디', 
          description: '이것은 빠다 고구마 크림 스무디입니다.', 
          image: newMenu04 
        },
      ];
    const handleButtonClick = (item) => {
        setSelectedMenu(item)
    }
    const handleClosePopup = () => {
        setSelectedMenu(null);
      };
    return(
        <main className='menu'>
            <div className='menu_banner'>
                <h2>음료</h2>
                <p>공차의 다양한 음료를 소개합니다.</p>
            </div>

            <div className='menu_gnb'>
                <ul>
                    <li><button>NEW 시즌메뉴</button></li>
                    <li><button>베스트셀러</button></li>
                    <li><button>밀크티</button></li>
                    <li><button>스무디</button></li>
                    <li><button>오리지널 티</button></li>
                    <li><button>프룻티&모어</button></li>
                    <li><button>RTD</button></li>
                    <li><button>커피</button></li>
                </ul>
            </div>

            <h3>NEW 시즌메뉴</h3>
            <div className='menu_cont_01 menu_default'>
                <h4>빠다 고구마</h4>
                <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <button onClick={() => handleButtonClick(item)}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        </button>
                    </li>
                    ))}
                </ul>
                        {selectedMenu && (
                <Popup 
                content={selectedMenu} 
                onClose={handleClosePopup} 
                />
            )}
            </div>
        </main>
    )
}
export default MenuDrink;