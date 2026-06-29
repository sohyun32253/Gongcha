import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSlideUpObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../common/LazyImage';
import NewMenu01 from '../../images/new_menu_01.png';
import NewMenu02 from '../../images/new_menu_02.png';
import NewMenu03 from '../../images/new_menu_03.png';
import NewMenu04 from '../../images/new_menu_04.png';
import NewMenu05 from '../../images/new_menu_05.png';
import NewMenu06 from '../../images/new_menu_06.png';
import NewMenu07 from '../../images/new_menu_07.png';
import NewMenu08 from '../../images/new_menu_08.png';

const MENU_ITEMS = [
  { src: NewMenu01, name: '빠다 고구마 크림 밀크티' },
  { src: NewMenu02, name: '빠다 고구마 밀크티 + 펄' },
  { src: NewMenu03, name: '빠다 고구마 크림 밀크' },
  { src: NewMenu04, name: '빠다 고구마 크림 스무디' },
  { src: NewMenu05, name: '초코바른 피스타치오 스무디' },
  { src: NewMenu06, name: '초코바른 제주 그린 스무디' },
  { src: NewMenu07, name: '초코바른 초코 스무디' },
  { src: NewMenu08, name: '피스타치오 밀크티 + 펄' },
];

function NewMenuSection() {
  const titleRef = useRef(null);
  useSlideUpObserver(titleRef);

  return (
    <section className='new_menu'>
      <div className='new_menu_cont'>
        <h2 ref={titleRef} className='slide-up'>New menu</h2>
        <p>공차의 새로운 메뉴를 지금 만나보세요.</p>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1280: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            375: { slidesPerView: 1 },
          }}
        >
          {MENU_ITEMS.map((item) => (
            <SwiperSlide key={item.name}>
              <LazyImage src={item.src} alt={item.name} />
              <p>{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewMenuSection;
