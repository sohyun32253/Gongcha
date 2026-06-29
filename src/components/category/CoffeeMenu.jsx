import React from 'react';
import MenuGrid from './MenuGrid';
import { coffeeData } from '../../menuData/coffeeData';

const CoffeeMenu = ({ onItemClick }) => (
  <MenuGrid items={coffeeData} onItemClick={onItemClick} />
);

export default CoffeeMenu;
