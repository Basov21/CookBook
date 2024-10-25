import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import FavouritesPage from './components/pages/FavouritesPage';
import MainPage from './components/pages/MainPage';
import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import RecipePage from './components/pages/RecipePage';
import ProtectedRouter from './components/HOCs/ProtectedRouter';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ErrorPage from './components/pages/ErrorPage';


function App() {
  const [user, setUser] = useState();
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);


  useEffect(() => {
    const fetchFavouriteRecipes = async () => {
      try {
        const response = await axiosInstance.get('/favourites');
        setFavouriteRecipes(response.data);
      } catch (error) {
        console.error("Ошибка при получении избранных рецептов:", error);
      }
    };
  
    fetchFavouriteRecipes();
  }, []);
  
  const handleAddFavourite = async (recipeId) => {
    try {
      const response = await axiosInstance.post('/favourites', { recipeId });
      console.log(response);
      setFavouriteRecipes((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Ошибка при добавлении в избранное:", error);
    }
  };

  const handleDeleteFav = async (recipeId) => {
    await axiosInstance.delete('/favourites',{ data: { recipeId } });
    setFavouriteRecipes(favouriteRecipes.filter((recipe)=>recipe.id !== recipeId))
  }

  useEffect(() => {
    const refreshTokens = async () => {
      try {
        const res = await axiosInstance.get('/tokens/refresh');
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      } catch (error) {
        console.error("Ошибка при обновлении токенов:", error);
        setUser(null);
      }
    };
  
    refreshTokens();
  }, []);
  
  const signupHandler = async (e, navigate) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await axiosInstance.post('/auth/signup', data);
      if (res.status === 200) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };
  
  const loginHandler = async (e, navigate) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      const res = await axiosInstance.post('/auth/login', data);
      if (res.status === 200) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error("Ошибка при входе в систему:", error);
    }
  };
  
  const logoutHandler = async (navigate) => {
    try {
      const res = await axiosInstance.post('/auth/logout');
      if (res.status === 200) {
        setUser(null);
        setAccessToken('');
        navigate('/');
      }
    } catch (error) {
      console.error("Ошибка при выходе из системы:", error);
    }
  };
  

  const router = createBrowserRouter([
    {

      element: <Layout user={user} logoutHandler={logoutHandler} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage handleAddFavourite={handleAddFavourite} user={user} />,
        },
        {
          path: '/recipes/:recipeId',
          element: <RecipePage handleAddFavourite={handleAddFavourite} />,
        },
        {
          path: '/favourites',
          element: (

            <FavouritesPage favouriteRecipes={favouriteRecipes} handleAddFavourite={handleAddFavourite} handleDeleteFav={handleDeleteFav}/>

          ),
        },
        {
          element: <ProtectedRouter isAllowed={user === null} />,
          children: [
            {
              path: '/login',
              element: <LoginPage loginHandler={loginHandler} />,
            },
            {
              path: '/signup',
              element: <SignupPage signupHandler={signupHandler} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
