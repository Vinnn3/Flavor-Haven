import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = () => {
    fetch('https://json-server-vercel-obw5.onrender.com/recipes')
      .then(response => response.json())
      .then(data => {
        const recipesArray = Array.isArray(data) ? data : data.recipes || [];
        const filteredRecipes = recipesArray.filter(recipe =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRecipes(filteredRecipes);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchRecipes();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for recipes"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={searchRecipes}
          className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>

      <ul className="space-y-4">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <li key={recipe.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
              <p className="text-gray-700"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <p className="text-gray-700"><strong>Instructions:</strong> {recipe.instructions}</p>
              <p className="text-gray-700"><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p className="text-gray-700"><strong>Rating:</strong> {recipe.rating}</p>
              <p className="text-gray-700"><strong>Meal Type:</strong> {recipe.mealType}</p>
              {recipe.image && <img src={recipe.image} alt={recipe.name} className="w-24 h-auto mt-2 rounded-md shadow-sm" />}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
