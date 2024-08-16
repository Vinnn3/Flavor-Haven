import React from 'react';
import './Styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="relative group recipe-card overflow-hidden bg-white shadow-lg rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-xl font-bold recipe-name">{recipe.name}</h2>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="text-center">
          <p className="mb-2 text-sm"><strong>Ingredients:</strong></p>
          <ul className="list-disc list-inside mb-4 text-sm">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-sm"><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      </div>
    </div>
    
  );
};

export default RecipeCard;
