import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://json-server-vercel-obw5.onrender.com/recipes')
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
    <div className="p-4 min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        {recipes.length === 0 && <p className="col-span-full text-center">No recipes available.</p>}
      </div>
    </div>
  );
};

export default RecipeList;
