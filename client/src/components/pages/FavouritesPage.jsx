import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import RecipeCard from "../ui/RecipeCard";


export default function FavouritesPage({ favouriteRecipes, handleAddFavourite, handleDeleteFav }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosInstance.get('/favourites').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  if (recipes.length === 0) {
    return <div style= {{textAlign: 'center', marginTop: '50px', fontSize: '20px', color: 'red'}}>Вы не добавили ни одного рецепта</div>;
  }

return (

  <div>
    {console.log(favouriteRecipes)}
    {favouriteRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} handleAddFavourite={handleAddFavourite} onDelete={()=>handleDeleteFav(recipe.id)}/>))}
  </div>

)
}

