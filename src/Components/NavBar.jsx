import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flavour Haven</h1>
        <div className="space-x-4">
          <NavLink 
            to={'/'} 
            className={({ isActive }) => 
              `text-lg ${isActive ? 'text-blue-400' : 'text-white'} hover:text-blue-300`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to={'/create-recipe'} 
            className={({ isActive }) => 
              `text-lg ${isActive ? 'text-blue-400' : 'text-white'} hover:text-blue-300`
            }
          >
            Create Recipe
          </NavLink>
          <NavLink 
            to={'/recipes'} 
            className={({ isActive }) => 
              `text-lg ${isActive ? 'text-blue-400' : 'text-white'} hover:text-blue-300`
            }
          >
            Recipes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
