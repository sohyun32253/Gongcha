import React, { useRef } from 'react';
import { useSlideUpObserver, useFadeInObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../common/LazyImage';
import sns01 from '../../images/sns_01.png';
import sns02 from '../../images/sns_02.png';
import sns03 from '../../images/sns_03.png';
import sns04 from '../../images/sns_04.png';

const SNS_ITEMS = [
  { src: sns01, alt: 'insta01', className: 'insta01' },
  { src: sns02, alt: 'insta02', className: 'insta02' },
  { src: sns03, alt: 'insta03', className: 'insta03' },
  { src: sns04, alt: 'insta04', className: 'insta04' },
];

function SnsSection() {
  const titleRef = useRef(null);
  const wrapRef = useRef(null);

  useSlideUpObserver(titleRef);
  useFadeInObserver(wrapRef);

  return (
    <section className='sns_insta'>
      <div className='sns_cont'>
        <h2 ref={titleRef} className='slide-up'>SNS</h2>
        <div className='cont_wrap' ref={wrapRef} data-io="fade-in">
          <div className='cont_top'>
            {SNS_ITEMS.slice(0, 2).map((item) => (
              <div key={item.alt} className={item.className}>
                <a href="#none"><LazyImage src={item.src} alt={item.alt} /></a>
              </div>
            ))}
          </div>
          <div className='cont_bottom'>
            {SNS_ITEMS.slice(2).map((item) => (
              <div key={item.alt} className={item.className}>
                <a href="#none"><LazyImage src={item.src} alt={item.alt} /></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SnsSection;
