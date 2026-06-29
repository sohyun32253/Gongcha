import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSlideUpObserver, useFadeInObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../common/LazyImage';
import order01 from '../../images/order_01.png';
import store01 from '../../images/store_01.png';
import search from '../../images/search_default.svg';

function OrderStoreSection() {
  const titleRef = useRef(null);
  const wrapRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useSlideUpObserver(titleRef);
  useFadeInObserver(wrapRef);

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim() === '') {
      toast.error('검색어를 입력해주세요!');
      return;
    }
    navigate(`/store?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className='order_store'>
      <div className='order_store_cont'>
        <div className='order_store_container'>
          <h2 ref={titleRef} className='slide-up'>order & store</h2>
          <div className='order_store_wrap' ref={wrapRef} data-io="fade-in">
            <div className='order'>
              <div className='order_left'>
                <h3>주문하기</h3>
                <p>토핑, 당도, 얼음량을 조절하여 <br />나만의 메뉴를 만들어보세요.</p>
                <button>자세히 보기 <span> &gt; </span></button>
              </div>
              <LazyImage src={order01} alt="음료 이미지" />
            </div>

            <div className='store'>
              <div className='store_left'>
                <h3>매장 찾기</h3>
                <p>공차를 쉽고 빠르게 찾아보세요.</p>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder='매장을 입력하세요'
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                  />
                  <button type="submit">
                    <img src={search} className='store_right' alt="매장 검색하기" />
                  </button>
                </form>
              </div>
              <LazyImage src={store01} alt="공차 로고" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderStoreSection;
