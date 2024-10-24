
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import FavouritesPage from './components/pages/FavouritesPage';
import MainPage from './components/pages/MainPage';
import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import RecipePage from './components/pages/RecipePage';
import ProtectedRouter from './components/HOCs/ProtectedRouter';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';


function App() {
  const [user, setUser] = useState();
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    axiosInstance.get('/favourites').then((response) => {
      setFavouriteRecipes(response.data);
    });
  }, []);

  const handleAddFavourite = async (recipeId) => {
    try {
      const response = await axiosInstance.post('/favourites', { recipeId });
      console.log(response);
      // Обнови состояние избранных рецептов
      setFavouriteRecipes((prev) => [response.data, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const signupHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
    window.location.href = '/';
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/login', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
    window.location.href = '/';
  };

  const logoutHandler = async () => {
    const res = await axiosInstance.post('/auth/logout');
    if (res.status === 200) {
      setUser(null);
      setAccessToken('');
    }
    window.location.href = '/';
  };

  const router = createBrowserRouter([
    {

      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <MainPage handleAddFavourite={handleAddFavourite}/>,
        },
        {
          path: '/recipes/:recipeId',
          element: <RecipePage handleAddFavourite={handleAddFavourite} />,
        },
        {
          path: '/favourites',
          element: (

            <FavouritesPage favouriteRecipes={favouriteRecipes} handleAddFavourite={handleAddFavourite} />

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
