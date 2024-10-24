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
    <Card style={{ width: '30rem', marginLeft: "auto", marginRight: "auto", top: "50px"}}>
      <Card.Img variant="top" src={recipe.img} />
      <Card.Body>
        <Card.Title><h4>{recipe.title}</h4></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h6>Ингредиенты: </h6>{recipe.ingredients}</ListGroup.Item>
        <ListGroup.Item><h6>Колличество ингредиентов: </h6>{recipe.quantity}</ListGroup.Item>
        <ListGroup.Item><h6>Способ приготовления: </h6>{recipe.instruction}</ListGroup.Item>
        <ListGroup.Item><h6>Время приготовления: </h6>{recipe.time}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="danger">В избранное</Button>{' '}
      </Card.Body>
    </Card>
  );
}
