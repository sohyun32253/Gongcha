import React from 'react';
import MenuGrid from './MenuGrid';
import { rtdData } from '../../menuData/rtdData';

const RtdMenu = ({ onItemClick }) => (
  <MenuGrid items={rtdData} onItemClick={onItemClick} />
);

export default RtdMenu;
