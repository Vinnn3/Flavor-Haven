import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      {recipes.length === 0 && <p>No recipes available.</p>}
    </div>
  );
};

export default RecipeList;