import React, { useRef, useState, useCallback } from 'react';
import CountUp from 'react-countup';
import { useSlideUpObserver, useFadeInObserver, useInViewObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../common/LazyImage';
import global from '../../images/global_right.png';
import globalTxt01 from '../../images/global_txt_01.png';
import globalTxt02 from '../../images/global_txt_02.png';

function GlobalSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useSlideUpObserver(titleRef);
  useFadeInObserver(imageRef);

  const handleIntersect = useCallback(() => {
    setStartCount(true);
  }, []);

  useInViewObserver(sectionRef, handleIntersect);

  return (
    <section className='global' ref={sectionRef}>
      <div className='global_cont'>
        <div className='global_left'>
          <h2 ref={titleRef}>Global, Gong cha</h2>
          <p>공차는 새로운 차 문화를 선도하는 브랜드로 <br />전세계적인 사랑을 받고 있습니다.</p>
          {startCount && (
            <div className='number_slide_up'>
              <div className='count_01'>
                <CountUp start={0} end={24} duration={2.5} separator="," />
                <span className='txt_01'><LazyImage src={globalTxt01} alt="24개국" /></span>
              </div>
              <div className='count_02'>
                <CountUp start={0} end={2000} duration={2.5} separator="," />
                <span className='txt_02'><LazyImage src={globalTxt02} alt="2000점 운영" /></span>
              </div>
            </div>
          )}
        </div>
        <LazyImage src={global} alt="세계지도" ref={imageRef} data-io="fade-in" />
      </div>
    </section>
  );
}

export default GlobalSection;
