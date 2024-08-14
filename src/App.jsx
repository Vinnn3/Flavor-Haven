import React from 'react';
import './index.css';
import { Outlet } from 'react-router-dom'
import Navigation from './Components/NavBar';



const App = () => {
  return (
  <div>
      <Navigation /> 
     <Outlet />
     
     
    </div>
  );
};

export default App;
