import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import RecipeCard from "../ui/RecipeCard";


export default function FavouritesPage({ favouriteRecipes, handleAddFavourite }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axiosInstance.get('/favourites');
        setRecipes(response.data);
      } catch (error) {
        console.error("Ошибка при получении избранных рецептов:", error);
      }
    };
  
    fetchFavourites();
  }, []);

  if (recipes.length === 0) {
    return <div style= {{textAlign: 'center', marginTop: '50px', fontSize: '20px', color: 'red'}}>Вы не добавили ни одного рецепта</div>;
  }

return (

  <div>
    {console.log(favouriteRecipes)}
    {favouriteRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} handleAddFavourite={handleAddFavourite}/>))}
  </div>

)
}

