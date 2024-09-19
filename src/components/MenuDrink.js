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
          description: '향긋한 블랙티가 들어간 단짠 솔티드 버터고구마에 고소한 타로폼과 고구마칩을 올려 달콤고소하게 즐기는 시즌한정 밀크티', 
          image: newMenu01, 
          L_price: 'Large 5,100원',
          L_kcal: '281kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'24g',
          L_protein:'0g',
          L_fat: '7g',
          L_natrium: '212mg',
          L_caffeine: '28mg',
          J_size:'0',
          J_sugar:'0',
          J_protein:'0',
          J_fat: '0',
          J_natrium: '0',
          J_caffeine: '0',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 2, 
          title: '빠다 고구마 크림 밀크티 + 펄 (HOT)', 
          description: '향긋한 블랙티가 들어간 단짠 솔티드 버터고구마에 쫀득한 펄을 더하여 즐기는 시즌한정 밀크티', 
          image: newMenu01, 
          L_price: 'Large 5,100원',
          L_kcal: '282kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'414ml',
          L_sugar:'21g',
          L_protein:'6g',
          L_fat: '8g',
          L_natrium: '207mg',
          L_caffeine: '28mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 3, 
          title: '빠다 고구마 밀크티 + 펄', 
          description: '향긋한 블랙티가 들어간 단짠 솔티드 버터고구마에 쫀득한 펄을 더하여 즐기는 시즌한정 밀크티', 
          image: newMenu02, 
          L_price: 'Large 5,100원',
          L_kcal: '247kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 밀, 이산화황',
          L_size:'473ml',
          L_sugar:'26g',
          L_protein:'5g',
          L_fat: '3g',
          L_natrium: '117mg',
          L_caffeine: '17mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 4, 
          title: '빠다 고구마 밀크티 + 펄 (HOT)', 
          description: '향긋한 블랙티가 들어간 단짠 솔티드 버터고구마에 쫀득한 펄을 더하여 즐기는 시즌한정 밀크티', 
          image: newMenu02, 
          L_price: 'Large 5,100원',
          L_kcal: '247kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 밀, 이산화황',
          L_size:'414ml',
          L_sugar:'26g',
          L_protein:'6g',
          L_fat: '3g',
          L_natrium: '128mg',
          L_caffeine: '28mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 5, 
          title: '빠다 고구마 크림 밀크', 
          description: '단짠 솔티드 버터고구마에 고소한 타로폼과 고구마칩을 올려 달콤고소하게 즐기는 시즌한정 밀크', 
          image: newMenu03, 
          L_price: 'Large 5,100원',
          L_kcal: '294kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'22g',
          L_protein:'7g',
          L_fat: '9g',
          L_natrium: '204mg',
          L_caffeine: '0mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 6, 
          title: '빠다 고구마 크림 밀크 (HOT)', 
          description: '단짠 솔티드 버터고구마에 고소한 타로폼과 고구마칩을 올려 달콤고소하게 즐기는 시즌한정 밀크', 
          image: newMenu03, 
          L_price: 'Large 5,100원',
          L_kcal: '283kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'414ml',
          L_sugar:'21g',
          L_protein:'6g',
          L_fat: '9g',
          L_natrium: '214mg',
          L_caffeine: '0mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 7, 
          title: '빠다 고구마 크림 스무디', 
          description: '향긋한 블랙티를 더한 단짠 솔티드 버터고구마에 고소한 타로폼과 고구마 칩을 올려 달콤 고소하고 시원하게 즐기는 시즌한정 스무디', 
          image: newMenu04, 
          L_price: 'Large 5,700원',
          L_kcal: '382kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'31g',
          L_protein:'1g',
          L_fat: '11g',
          L_natrium: '235mg',
          L_caffeine: '28mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 8, 
          title: '초코바른 피스타치오 스무디', 
          description: '자스민티를 넣은 달콤하고 고소한 피스타치오 스무디에 바삭하게 깨지는 초코바른과 쿠키로 식감을 더한 스무디', 
          image: newMenu05, 
          L_price: 'Large 5,700원',
          L_kcal: '455kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'38g',
          L_protein:'4g',
          L_fat: '13g',
          L_natrium: '180mg',
          L_caffeine: '21mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 9, 
          title: '초코바른 제주 그린 스무디', 
          description: '제주 녹차로 만든 스무디에 쿠키분태, 달콤짭조름한 치즈폼, 컵에 둘러진 초콜렛으로 비쥬얼을 더한 스무디​', 
          image: newMenu06, 
          L_price: 'Large 5,900원',
          L_kcal: '415kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'40g',
          L_protein:'3g',
          L_fat: '12g',
          L_natrium: '150mg',
          L_caffeine: '75mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 10, 
          title: '초코바른 초코 스무디', 
          description: '달콤한 초코 쿠키 스무디에 달콤짭조름한 치즈폼, 컵에 둘러진 초콜렛으로 비쥬얼을 더한 스무디', 
          image: newMenu07, 
          L_price: 'Large 5,700원',
          L_kcal: '480kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'473ml',
          L_sugar:'26g',
          L_protein:'4g',
          L_fat: '18g',
          L_natrium: '180mg',
          L_caffeine: '15mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 11, 
          title: '피스타치오 밀크티 + 펄', 
          description: '자스민티를 넣은 달콤하고 고소한 피스타치오 밀크티에 쫀득쫀득한 펄을 더한 밀크티', 
          image: newMenu08, 
          L_price: 'Large 5,100원',
          J_price: 'Jumbo 6,200원',
          L_kcal: '320kcal',
          J_kcal: '435kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 이산화황',
          L_size:'473ml',
          L_sugar:'28g',
          L_protein:'8g',
          L_fat: '6g',
          L_natrium: '150mg',
          L_caffeine: '17mg',
          J_size:'651ml',
          J_sugar:'38g',
          J_protein:'11g',
          J_fat: '8g',
          J_natrium: '200mg',
          J_caffeine: '21ml',
          isLargeAvailable: true,
          isJumboAvailable: true
        },
       
        { 
          id: 12, 
          title: '피스타치오 밀크티 + 펄 (HOT)', 
          description: '자스민티를 넣은 달콤하고 고소한 피스타치오 밀크티에 쫀득쫀득한 펄을 더한 밀크티', 
          image: newMenu08, 
          L_price: 'Large 5,700원',
          J_price: 'Jumbo 5,900원',
          L_kcal: '355kcal',
          J_kcal: '460kcal',
          warning: '알레르기 유발 식품 : 우유, 대두, 밀',
          L_size:'414ml',
          L_sugar:'35g',
          L_protein:'9g',
          L_fat: '6g',
          L_natrium: '170mg',
          L_caffeine: '17mg',
          J_size:'473ml',
          J_sugar:'45g',
          J_protein:'12g',
          J_fat: '8g',
          J_natrium: '220mg',
          J_caffeine: '21ml',
          isLargeAvailable: true,
          isJumboAvailable: true
        },
        { 
          id: 13, 
          title: '파인애플 코코넛 스무디', 
          description: '달콤하고 상큼한 파인패션에 고소하고 부드러운 코코넛 밀크 스무디가 들어가 한여름의 하모니를 느낄 수 있는 시즌 한정 제품', 
          image: newMenu09, 
          L_price: 'Large 5,500원',
          L_kcal: '343kcal',
          warning: '* 알레르기 유발 식품 : 우유',
          L_size:'473ml',
          L_sugar:'39g',
          L_protein:'1g',
          L_fat: '8g',
          L_natrium: '97mg',
          L_caffeine: '17.1mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 14, 
          title: '파인애플 오아시스', 
          description: '리얼 파인애플 칩이 통째로! 시원하고 고소한 코코넛 워터가 가득! 무더운 여름철 시원하고 가볍게 즐길 수 있는 카페인 프리 시즌 한정 제품', 
          image: newMenu10, 
          J_price: 'Jumbo 5,700원',
          J_kcal: '155kcal',
          J_size:'651ml',
          J_sugar:'28g',
          J_protein:'1g',
          J_fat: '0g',
          J_natrium: '47mg',
          J_caffeine: '0mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 15, 
          title: '파인애플 오아시스 티', 
          description: '리얼 파인애플 칩이 통째로! 향긋한 자스민티와 시원하고 고소한 코코넛 워터가 가득! 무더운 여름철 시원하고 가볍게 즐길 수 있는 시즌 한정 제품', 
          image: newMenu11, 
          J_price: 'Jumbo 5,500원',
          J_kcal: '126kcal',
          J_size:'414ml',
          J_sugar:'26g',
          J_protein:'6g',
          J_fat: '3g',
          J_natrium: '128mg',
          J_caffeine: '28mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 16, 
          title: '코코넛 밀크 스무디 + 펄', 
          description: '고소하고 부드러운 코코넛 밀크 스무디에 쫀득한 펄이 들어가 여름철 시원하게 즐길 수 있는 카페인 프리 시즌 한정 제품', 
          image: newMenu12, 
          L_price: 'Large 5,500원',
          L_kcal: '329kcal',
          warning: '* 알레르기 유발 식품 : 우유, 이산화황',
          L_size:'473ml',
          L_sugar:'32g',
          L_protein:'1g',
          L_fat: '8g',
          L_natrium: '94mg',
          L_caffeine: '0mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 17, 
          title: '코코넛 블랙 밀크티', 
          description: '고소하고 부드러운 코코넛 밀크에 진한 블랙티가 들어가 여름철 시원하게 즐길 수 있는 시즌 한정 제품', 
          image: newMenu13, 
          L_price: 'Large 4,900원',
          L_kcal: '166kcal',
          warning: '알레르기 유발 식품 : 우유',
          L_size:'473ml',
          L_sugar:'15g',
          L_protein:'4g',
          L_fat: '4g',
          L_natrium: '66mg',
          L_caffeine: '28mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 18, 
          title: '코코넛 밀크 + 미니펄', 
          description: '고소하고 부드러운 코코넛 밀크에 말랑하고 쫀득한 미니펄이 들어간 카페인 프리 시즌 한정 제품', 
          image: newMenu14, 
          L_price: 'Large 5,100원',
          L_kcal: '235kcal',
          warning: '* 알레르기 유발 식품 : 우유',
          L_size:'473ml',
          L_sugar:'21g',
          L_protein:'6g',
          L_fat: '5g',
          L_natrium: '82mg',
          L_caffeine: '0mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 19, 
          title: '납작 복숭아 아이스티 블랙 + 샷 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 에스프레소 샷과 함께 달콥 쌉싸름 시원하게 즐기는 공차 아이스티', 
          image: newMenu15, 
          J_price: 'Jumbo 4,500원',
          J_kcal: '115kcal',
          J_size:'651ml',
          J_sugar:'0g',
          J_protein:'0g',
          J_fat: '0g',
          J_natrium: '3mg',
          J_caffeine: '197mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 20, 
          title: '납작 복숭아 아이스티 얼그레이 + 샷 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 에스프레소 샷과 함께 달콥 쌉싸름 시원하게 즐기는 공차 아이스티', 
          image: newMenu16, 
          J_price: 'Jumbo 4,500원',
          J_kcal: '119kcal',
          J_size:'651ml',
          J_sugar:'0g',
          J_protein:'0g',
          J_fat: '0g',
          J_natrium: '3mg',
          J_caffeine: '194mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 21, 
          title: '납작 복숭아 아이스티 블랙 + 미니펄 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 말랑쫀득 미니펄과 함께 시원하게 즐기는 공차 아이스티', 
          image: newMenu17, 
          J_price: 'Jumbo 4,700원',
          J_kcal: '216kcal',
          J_size:'651ml',
          J_sugar:'9g',
          J_protein:'0g',
          J_fat: '0g',
          J_natrium: '9mg',
          J_caffeine: '68mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 22, 
          title: '납작 복숭아 아이스티 얼그레이 + 미니펄 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 말랑쫀득 미니펄과 함께 시원하게 즐기는 공차 아이스티', 
          image: newMenu18, 
          J_price: 'Jumbo 4,700원',
          J_kcal: '220kcal',
          J_size:'651ml',
          J_sugar:'9g',
          J_protein:'1g',
          J_fat: '0g',
          J_natrium: '10mg',
          J_caffeine: '65mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 23, 
          title: '납작 복숭아 아이스티 블랙 + 리얼 복숭아 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 리얼 복숭아 원물과 함께 시원하게 즐기는 공차 아이스티', 
          image: newMenu19, 
          J_price: 'Jumbo 4,500원',
          J_kcal: '161kcal',
          J_size:'651ml',
          J_sugar:'9g',
          J_protein:'0g',
          J_fat: '0g',
          J_natrium: '7mg',
          J_caffeine: '68mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 24, 
          title: '납작 복숭아 아이스티 얼그레이 + 리얼 복숭아 J', 
          description: '직접 우린 향긋한 공차 티와 달콤한 납작복숭아를 더해 리얼 복숭아 원물과 함께 시원하게 즐기는 공차 아이스티', 
          image: newMenu20, 
          J_price: 'Jumbo 4,500원',
          J_kcal: '165kcal',
          J_size:'651ml',
          J_sugar:'9g',
          J_protein:'1g',
          J_fat: '0g',
          J_natrium: '8mg',
          J_caffeine: '65mg',
          isLargeAvailable: false,
          isJumboAvailable: true
        },
        { 
          id: 25, 
          title: '카페 스무디 with 블랙티', 
          description: '부드러운 커피에 은은한 블랙티와 브라운슈가향이 어우러져 공차만의 스타일로 탄생한 메뉴', 
          image: newMenu21, 
          L_price: 'Large 5,200원',
          L_kcal: '259kcal',
          warning: '* 알레르기 유발 식품 : 우유',
          L_size:'473ml',
          L_sugar:'16g',
          L_protein:'2g',
          L_fat: '6g',
          L_natrium: '94mg',
          L_caffeine: '97mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        { 
          id: 26, 
          title: '초당 옥수수 밀크티 + 펄', 
          description: '여름철 대표 간식 “초당옥수수”에 공차의 매력적인 펄과 블랙티를 더하여 시원하게 즐기는 시즌 한정 밀크티', 
          image: newMenu22, 
          L_price: 'Large 5,100원',
          L_kcal: '308kcal',
          warning: '* 알레르기 유발 식품 : 우유, 대두, 이산화황',
          L_size:'473ml',
          L_sugar:'29g',
          L_protein:'7g',
          L_fat: '4g',
          L_natrium: '182mg',
          L_caffeine: '24mg',
          isLargeAvailable: true,
          isJumboAvailable: false
        },
        {
          id: 27, 
          title: '초당 옥수수 밀크티 + 펄', 
          description: '여름철 대표 간식 “초당옥수수”에 공차의 매력적인 펄과 블랙티를 더하여 시원하게 즐기는 시즌 한정 밀크티', 
          image: newMenu22, 
          L_price: 'Large 5,100원',
          isLargeAvailable: false,
          isJumboAvailable: false
        }
       
      ];
    const handleButtonClick = (item) => {
        setSelectedMenu(item)
    }
    const handleClosePopup = () => {
        setSelectedMenu(null);
      };

    const menuSections = [
        { title: '빠다 고구마', items: menuItems.slice(0, 7) },  // 5개의 항목
        { title: '초코바른 시리즈', items: menuItems.slice(7, 12) },  // 3개의 항목
        { title: '코코넛 파라다이스 2차', items: menuItems.slice(12, 15) },  // 4개의 항목
        { title: '미니펄&코코넛', items: menuItems.slice(15, 18) },  // 3개의 항목
        { title: '납작 복숭아 아이스티', items: menuItems.slice(18, 24) },  // 4개의 항목
        { title: '공차치노&초당옥수수 밀크티', items: menuItems.slice(24, 26) },  // 4개의 항목
        { title: '미니펄 스페셜', items: menuItems.slice(26, 34) },  // 4개의 항목
        { title: '2024 포도 크림치즈폼', items: menuItems.slice(31, 33) },  // 5개의 항목
        { title: '2024 허니베어', items: menuItems.slice(33, 38) },  // 4개의 항목
        { title: '2024 미니펄', items: menuItems.slice(38, 41) }  // 4개의 항목
    ];
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
            
            {menuSections.map((section, index) => (
                <div key={index} className='menu_cont_01 menu_default'>
                    <h4>{section.title}</h4>
                    <ul>
                        {section.items.map(item => (
                            <li key={item.id}>
                                <button onClick={() => handleButtonClick(item)}>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* 팝업 표시 */}
            {selectedMenu && (
                <Popup
                    content={selectedMenu}
                    onClose={handleClosePopup}
                />
            )}
        </main>
    )
}
export default MenuDrink;