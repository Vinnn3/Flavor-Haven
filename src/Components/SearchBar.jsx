import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = () => {
    fetch('http://localhost:3000/recipes')
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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for recipes"
      />
      <button onClick={searchRecipes}>Search</button>

      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Cuisine:{recipe.cuisine}</p>
            <p>Rating:{recipe.rating}</p>
            <p>Meal Type {recipe.mealType}</p>
            <img src={recipe.image} alt={recipe.name} style={{ width: '15%', height: 'auto' }} />
          </li>
        ))}
      </ul>

      {recipes.length === 0 && <p>No recipes found.</p>}
    </div>
  );
};

export default SearchBar;
