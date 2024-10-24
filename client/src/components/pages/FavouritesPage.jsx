import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import RecipeCard from "../ui/RecipeCard";


export default function FavouritesPage({ favouriteRecipes, handleAddFavourite }) {

return (

  <div>
    {console.log(favouriteRecipes)}
    {favouriteRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} handleAddFavourite={handleAddFavourite}/>))}
  </div>

)
}

