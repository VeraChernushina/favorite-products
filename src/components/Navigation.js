import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>Все товары</li>
          <li>Избранные</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
