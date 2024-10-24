import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";


export default function FavouritesPage({user}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosInstance.get('favourites/').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      
    </div>
  )
}
