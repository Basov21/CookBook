import { useEffect, useState } from "react";
import RecipeCard from "../ui/RecipeCard";
import axiosInstance from "../../api/axiosInstance";


export default function MainPage(handleAddFavourite) {
    const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    axiosInstance.get('/recipes').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
  <div>
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} handleAddFavourite={handleAddFavourite}/>))}
  </div>
  )
}
