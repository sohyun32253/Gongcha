import CountUp from 'react-countup';
import React, { useState, useEffect, useRef } from 'react';
import global from '../images/global_right.png'
import globalTxt01 from '../images/global_txt_01.png'
import globalTxt02 from '../images/global_txt_02.png'
const io = new IntersectionObserver(
    (entrys) => {
      entrys.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('io-animation');
        } else {
          target.classList.remove('io-animation');
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '10%',
    }
  );
  const ioElements = document.querySelectorAll('[data-io]');
  ioElements.forEach(item => {
    io.observe(item);
  });
const NumberAnimation = () => {
    const [startCount, setStartCount] = useState(false); // 애니메이션 시작 여부
    const sectionRef = useRef(null); // 섹션 참조
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true); // 화면에 보이면 애니메이션 시작
                }
            },
            { threshold: 0.5 } // 섹션의 50% 이상이 보일 때 트리거
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        
        <section className='global' ref={sectionRef}>
            <div className='global_cont'>
                <div className='global_left'>
                <h2>Global, Gong cha</h2>
                    <p>
                        공차는 새로운 차 문화를 선도하는 브랜드로<br />
                        전세계적인 사랑을 받고 있습니다.
                    </p>
                    {startCount && (
                    <div className='number_slide_up'>
                        <div className='count_01'>
                            <CountUp start={0} end={24} duration={2.5} separator="," />
                            <span className='txt_01'><img src={globalTxt01} alt="24개국" /></span> 
                        </div>
                        <div className='count_02'>
                            <CountUp start={0} end={2000} duration={2.5} separator="," />
                            <span className='txt_02'><img src={globalTxt02} alt="2000점 운영" /></span>
                        </div>
                    </div>)}
                </div>
                <img src={global} alt="세계지도" data-io="fade-in"/>
            </div>
        </section>
    );
};



export default NumberAnimation;
