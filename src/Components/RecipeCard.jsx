import React from 'react';

const RecipeCard = ({ recipe }) => {
 
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:{recipe.instructions}</p>
      <p>Cuisine:{recipe.cuisine}</p>
      <p>Meal-Type:{recipe.mealType}</p>
      <p>Rating: {recipe.rating}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: '15%', height: 'auto' }} />
    </div>
  );
};

export default RecipeCard; 