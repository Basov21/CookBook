import { useEffect, useState } from 'react';
import RecipeCard from '../ui/RecipeCard';
import axiosInstance from '../../api/axiosInstance';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainPage({ handleAddFavourite, user }) {
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
    <Container>
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          fontSize: '25px',
          color: 'red',
          borderRadius: '25px',
        }}
      >
        <select
          style={{
            width: '800px',
            height: '50px',
            borderRadius: '20px',
            textAlign: 'center',
          }}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Нет сортировки</option>
          <NavDropdown.Divider />
          <option value="timeAsc">Сортировать по времени (возрастание)</option>
          <NavDropdown.Divider />
          <option value="timeDesc">Сортировать по времени (убывание)</option>
          <NavDropdown.Divider />
          <option value="quantityAsc">
            Сортировать по количеству ингредиентов (возрастание)
          </option>
          <NavDropdown.Divider />
          <option value="quantityDesc">
            Сортировать по количеству ингредиентов (убывание)
          </option>
        </select>
      </div>
      <Row>
        {sortedRecipes.map((recipe) => (
          <Col key={recipe.id} md={6}>
            <RecipeCard
              user={user}
              recipe={recipe}
              handleAddFavourite={handleAddFavourite}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
