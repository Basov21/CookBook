import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import RecipeCard from "../ui/RecipeCard";


export default function FavouritesPage({user}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosInstance.get('/favourites').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (

      <div>
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />))}
  </div>

  )
}
