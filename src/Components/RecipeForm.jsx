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
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create a New Recipe</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Title:</label>
              <input 
                type="text" 
                value={name}
                onChange={e => setTitle(e.target.value)} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
              <input
                type="text"
                value={ingredients.join(', ')}
                onChange={e => setIngredients(e.target.value.split(', '))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Instructions:</label>
              <textarea 
                value={instructions} 
                onChange={e => setInstructions(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Image:</label>
              <input 
                type="file" 
                onChange={e => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Recipe
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-100 p-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Newly Added Recipes</h2>
        <ul className="space-y-6">
          {newRecipes.map(recipe => (
            <li key={recipe.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.name}</h3>
              <p className="text-gray-700 mb-2"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <p className="text-gray-700 mb-2"><strong>Instructions:</strong> {recipe.instructions}</p>
              {recipe.image && <img src={recipe.image} alt={recipe.name} className="w-32 h-auto mt-2 rounded-md shadow-sm" />}
            </li>
          ))}
        </ul>
      </footer>
    </div>

  );
};

export default RecipeForm;
