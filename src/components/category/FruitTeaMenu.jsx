import React from 'react';
import MenuGrid from './MenuGrid';
import { fruitTeaData } from '../../menuData/fruitTeaData';

const FruitTeaMenu = ({ onItemClick }) => (
  <MenuGrid items={fruitTeaData} onItemClick={onItemClick} />
);

export default FruitTeaMenu;
