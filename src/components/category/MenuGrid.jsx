import React, { useRef } from 'react';
import LazyImage from '../common/LazyImage';
import { useRevealOnScroll } from '../../hooks/useIntersectionObserver';

function MenuGrid({ items, onItemClick }) {
  const listRef = useRef(null);
  useRevealOnScroll(listRef);

  return (
    <div className='menu_cont_01 menu_default' ref={listRef}>
      <ul className='menu_list'>
        {items.map((item, index) => (
          <li
            key={item.id}
            data-reveal
            className='menu-item-reveal'
            style={{ '--reveal-delay': `${(index % 4) * 0.1}s` }}
          >
            <button onClick={() => onItemClick(item)}>
              <LazyImage src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuGrid;
