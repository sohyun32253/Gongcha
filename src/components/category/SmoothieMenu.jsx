import React from 'react';
import MenuGrid from './MenuGrid';
import { smoothieData } from '../../menuData/smoothieData';

const SmoothieMenu = ({ onItemClick }) => (
  <MenuGrid items={smoothieData} onItemClick={onItemClick} />
);

export default SmoothieMenu;
