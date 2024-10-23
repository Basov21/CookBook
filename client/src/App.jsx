import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css'
import FavouritesPage from "./components/pages/FavouritesPage";
import MainPage from "./components/pages/MainPage";
import RecipePage from "./components/pages/RecipePage";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "//:recipeId",
          element: <RecipePage />,
        },
        {
          path: '/account',
          element: (
            <ProtectedRoute redirectPath="/login" isAllowed={!!user}>
              <FavouritesPage user={user} />
            </ProtectedRoute>
          ),
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
