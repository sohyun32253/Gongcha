import React from 'react';
import MenuGrid from './MenuGrid';
import { originalTeaData } from '../../menuData/originalTeaData';

const OriginalTeaMenu = ({ onItemClick }) => (
  <MenuGrid items={originalTeaData} onItemClick={onItemClick} />
);

export default OriginalTeaMenu;
