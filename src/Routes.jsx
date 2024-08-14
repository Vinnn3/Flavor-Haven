import React from 'react';
import App from './App'
import Home from './Pages/Home';
import CreateRecipe from './Pages/CreateRecipe';
import Recipe from './Pages/Recipe';

const AppRoutes=[
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:"/create-recipe",
        element:<CreateRecipe />
      },
      {
        path:"/recipes",
        element:<Recipe />

      }
    ]}
 ] 


export default AppRoutes;