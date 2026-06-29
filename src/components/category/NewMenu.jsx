import React from 'react';
import MenuGrid from './MenuGrid';
import { newMenuData } from '../../menuData/newMenuData';

const NewMenu = ({ onItemClick }) => (
  <MenuGrid items={newMenuData} onItemClick={onItemClick} />
);

export default NewMenu;
