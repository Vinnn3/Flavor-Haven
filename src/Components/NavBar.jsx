import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <h1>Flavour Haven</h1>
      <NavLink to={'/'}>
      <p>Home</p>
      </NavLink>
      <NavLink to={'/create-recipe'}>
        <p>Create Recipe</p>
      </NavLink>
      <NavLink to={'/recipe/:id'}>
        <p>Recipes</p>
      </NavLink>

</div>
  );
};

export default Navigation;