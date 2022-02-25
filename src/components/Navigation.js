import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Все товары
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Избранные</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
