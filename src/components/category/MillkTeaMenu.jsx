import React from 'react';
import MenuGrid from './MenuGrid';
import { milkTeaData } from '../../menuData/milkTeaData';

const MillkTeaMenu = ({ onItemClick }) => (
  <MenuGrid items={milkTeaData} onItemClick={onItemClick} />
);

export default MillkTeaMenu;
