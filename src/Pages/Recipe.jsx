import React from "react";
import RecipeList from "../Components/RecipeList";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default Home;
