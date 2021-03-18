import React from 'react';
import { list, list_item } from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../helpers/routes';

const Navigation = () => (
  <ul className={list}>
    <li className={list_item}>
      <NavLink
        exact
        to={routes.HOME}
        style={{ color: '#212121', textDecoration: 'none' }}
        activeStyle={{ color: '#cc2f8b' }}
      >
        Home
      </NavLink>
    </li>
    <li className={list_item}>
      <NavLink
        to={routes.MOVIES_PAGE}
        style={{ color: '#212121', textDecoration: 'none' }}
        activeStyle={{ color: '#cc2f8b' }}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
