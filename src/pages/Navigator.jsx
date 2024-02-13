import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapNavigator } from './Pages.styled';

export default function Navigator() {
  return (
    <WrapNavigator>
      <NavLink to="" className="navigate" end>Home</NavLink>
      <NavLink to="/catalog" className="navigate">Catalog</NavLink>
      <NavLink to="/favorites" className="navigate">Favorites</NavLink>
    </WrapNavigator>
  );
}
