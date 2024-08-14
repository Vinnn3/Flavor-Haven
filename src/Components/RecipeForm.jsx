import React, { useState } from 'react';

const RecipeForm = () => {
  const [newRecipes, setNewRecipes] = useState([]);
  const [name, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null); 
  const [cuisine, setCuisine] = useState('');
  const [rating , setRating] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

let imageUrl = '';
if (image) {
  imageUrl = URL.createObjectURL(image); 
}

const newRecipe = {
  name,
  ingredients,
  instructions,
  cuisine,
  rating,
  mealType,
  image: imageUrl,

};

fetch('http://localhost:3000/recipes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newRecipe),
})
  .then(response => response.json())
  .then(data => {
    setNewRecipes([...newRecipes, data]);
  })
  .catch(error => console.error(error));

   
setTitle('');
setIngredients([]);
setInstructions('');
setImage(null);
setCuisine('');
setRating('');
setMealType('');
  };

  return (
    <div>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={name}
            onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            value={ingredients.join(', ')}
            onChange={e => setIngredients(e.target.value.split(', '))}
          />
        </label>
        <label>
          Instructions:
          <textarea 
            value={instructions} 
            onChange={e => setInstructions(e.target.value)} />
        </label>
        <label>
          Image:
          <input 
            type="text" 
            onChange={e => setImage(e.target.files[0])} /> 
        </label>
        <label>
          Cuisine:
          <input 
            type="text" 
            onChange={e => setCuisine(e.target.files[0])} /> 
        </label>
        <label>
          Rating:
          <input 
            type="text" 
            onChange={e => setRating(e.target.files[0])} /> 
        </label>
        <label>
          Meal Type:
          <input 
            type="text" 
            onChange={e => setMealType(e.target.files[0])} /> 
        </label>
        <button type="submit">Create Recipe</button>
      </form>

  <h2>Newly Added Recipes</h2>
  <ul>
    {newRecipes.map(recipe => (
      <li key={recipe.id}>
        <h3>{recipe.name}</h3>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Rating:</strong> {recipe.rating}</p>
        <p><strong>Meal Type:</strong> {recipe.mealType}</p>
        {recipe.image && <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />}
      </li>
    ))}
  </ul>
</div>
  );
};

export default RecipeForm;