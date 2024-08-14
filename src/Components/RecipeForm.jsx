import React, { useState } from 'react';

const RecipeForm = () => {
  const [newRecipes, setNewRecipes] = useState([]);
  const [name, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null); 

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
            type="file" 
            onChange={e => setImage(e.target.files[0])} /> 
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
        {recipe.image && <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />}
      </li>
    ))}
  </ul>
</div>
  );
};

export default RecipeForm;