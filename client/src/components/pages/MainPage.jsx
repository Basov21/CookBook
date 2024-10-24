import { useEffect, useState } from 'react';
import RecipeCard from '../ui/RecipeCard';
import axiosInstance from '../../api/axiosInstance';

export default function MainPage({ handleAddFavourite }) {
  const [recipes, setRecipes] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortOrder === 'timeAsc') {
      return a.time - b.time;
    } else if (sortOrder === 'timeDesc') {
      return b.time - a.time;
    } else if (sortOrder === 'quantityAsc') {
      return a.quantity - b.quantity;
    } else if (sortOrder === 'quantityDesc') {
      return b.quantity - a.quantity;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    axiosInstance.get('/recipes').then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      <div style={{textAlign: 'center', marginTop: '50px', fontSize: '20px', color: 'red'}}>
      <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Нет сортировки</option>
          <option value="timeAsc">Сортировать по времени (возрастание)</option>
          <option value="timeDesc">Сортировать по времени (убывание)</option>
          <option value="quantityAsc">Сортировать по количеству ингредиентов (возрастание)</option>
          <option value="quantityDesc">Сортировать по количеству ингредиентов (убывание)</option>
        </select>
      </div>
      {sortedRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} handleAddFavourite={handleAddFavourite}/>))}
    </div>
  );
}
