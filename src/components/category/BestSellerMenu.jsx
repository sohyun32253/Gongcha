import React from 'react';
import MenuGrid from './MenuGrid';
import { bestSellerData } from '../../menuData/bestSellerData';

const BestSellerMenu = ({ onItemClick }) => (
  <MenuGrid items={bestSellerData} onItemClick={onItemClick} />
);

export default BestSellerMenu;
