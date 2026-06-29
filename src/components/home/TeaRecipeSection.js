import React, { useRef, useState } from 'react';
import { useSlideUpObserver, useFadeInObserver } from '../../hooks/useIntersectionObserver';
import LazyImage from '../common/LazyImage';
import teaReceipe01 from '../../images/tea_receipe_01.png';
import teaReceipe02 from '../../images/tea_receipe_02.jpg';
import teaReceipe03 from '../../images/tea_receipe_03.jpg';

const TEA_TABS = [
  { id: 'tea_01', label: '오리지널티' },
  { id: 'tea_02', label: '밀크티' },
  { id: 'tea_03', label: '푸룻티' },
];

const TEA_CONTENT = {
  tea_01: {
    image: teaReceipe01,
    alt: '오리지널티 레시피',
    title: 'Original tea',
    description: (
      <>티백이나 가루가 아닌 황실에 바치던 잎차만 골라 1도 1초도 어기지 않고<br /> 다른 황금률로 우려 한 잔 한 잔 부드러움을 더해 만듭니다.</>
    ),
    className: 'cont_01',
  },
  tea_02: {
    image: teaReceipe02,
    alt: '밀크티 레시피',
    title: 'Milk tea',
    description: (
      <>최적의 자연이 키워낸 입차만 골라 각 차종에 맞는 황금률로 우려 담백한 우유와 <br />허니, 카라멜 등 새로운 맛을 더해 만듭니다.</>
    ),
    className: 'cont_02',
  },
  tea_03: {
    image: teaReceipe03,
    alt: '푸룻티 레시피',
    title: 'Fruit tea',
    description: (
      <>찻잎의 푸름을 간직한 녹차만 골라 최적의 온도 89℃로 우려 <br />달콤상큼한 과일을 더해 만듭니다.</>
    ),
    className: 'cont_03',
  },
};

function TeaRecipeSection() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [selectedTea, setSelectedTea] = useState('tea_01');

  useSlideUpObserver(titleRef);
  useFadeInObserver(contentRef);

  const currentTea = TEA_CONTENT[selectedTea];

  return (
    <section className='tea_receipe'>
      <div className='tea_receipe_cont'>
        <h2 ref={titleRef} className='slide-up'>Tea receipe</h2>
        <div className='tea_btn'>
          {TEA_TABS.map((tab) => (
            <div
              key={tab.id}
              className={`${tab.id} ${selectedTea === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedTea(tab.id)}
            >
              <a href="#none">{tab.label}</a>
            </div>
          ))}
        </div>

        <div className='change_cont' ref={contentRef} data-io="fade-in">
          <div className={currentTea.className}>
            <LazyImage src={currentTea.image} alt={currentTea.alt} />
            <dl>
              <dt>{currentTea.title}</dt>
              <dd>{currentTea.description}</dd>
            </dl>
          </div>
          <a href='#none'><button>레시피 보러가기<span> &gt; </span></button></a>
        </div>
      </div>
    </section>
  );
}

export default TeaRecipeSection;
