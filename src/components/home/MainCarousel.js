import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LazyImage from '../common/LazyImage';
import main01 from '../../images/main_01.jpeg';
import main02 from '../../images/main_02.jpg';
import main03 from '../../images/main_03.jpg';
import main04 from '../../images/main_04.jpg';
import main05 from '../../images/main_05.jpg';
import main06 from '../../images/main_06.jpg';
import main07 from '../../images/main_07.jpg';

const SLIDES = [
  { src: main01, alt: '너는 맛이 참 곱구마 빠다 고구마 모두가 반한 그 맛 단짠단짠 맛있구마 with 타로폼', id: 'img_size' },
  { src: main02, alt: '이달의 신메뉴 빠다 고구마 4종 구매 시 스탬프 3배 적립 2024년 9월 3일부터 7일까지 7일간' },
  { src: main03, alt: '짜장 펄볶이의 검은 유혹 맛의 대폭발 짜장' },
  { src: main04, alt: 'kT멤버십 모여라 제조 음료 전체 10% 할인' },
  { src: main05, alt: '돌아온 초코바른 당신이 찾던 그때 그 맛 그대로' },
  { src: main06, alt: 'LG U+와 공차 콜라보 u+멤버십 VIP콕 회원 공차 블랙밀크티 무료 증정' },
  { src: main07, alt: '베스트셀러 1위 블랙 밀크티+펄 2위 초콜릿 밀크티+밀크폼 3위 망고요구르트+화이트펄 4위 딸기 쿠키 스무디+펄 5위 우롱티+코코넛+밀크폼' },
];

function MainCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className='main_image'>
      <Carousel activeIndex={index} onSelect={setIndex}>
        {SLIDES.map((slide, i) => (
          <Carousel.Item key={slide.alt}>
            <LazyImage
              id={slide.id}
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              eager={i === 0}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MainCarousel;
