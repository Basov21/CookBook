import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axiosInstance from '../../api/axiosInstance';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function RecipePage({user}) {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/recipes/${recipeId}`).then((response) => {
      setRecipe(response.data);
    });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.img} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Ингредиенты: {recipe.ingredients}</ListGroup.Item>
        <ListGroup.Item>Колличество ингредиентов: {recipe.quantity}</ListGroup.Item>
        <ListGroup.Item>Способ приготовления: {recipe.instruction}</ListGroup.Item>
        <ListGroup.Item>Время приготовления: {recipe.time}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="danger">В избранное</Button>{' '}
      </Card.Body>
    </Card>
  );
}
