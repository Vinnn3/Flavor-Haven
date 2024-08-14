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
      <p>{recipe.instructions}</p>
      <img src={recipe.image} alt={recipe.name} style={{ width: '15%', height: 'auto' }} />

    </div>
  );
};

export default RecipeCard; 