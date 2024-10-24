import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axiosInstance from '../../api/axiosInstance';
import { useEffect, useState } from 'react';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/recipes/${recipeId}`).then((response) => {
      setRecipe(response.data);
    });
  }, []);

  // useEffect(() => {
  //   axiosInstance.get(`/recipes`).then((response) => {
  //     setRecipes(response.data);
  //   });
  // }, []);

  // const a = recipes.map((recipe) => (
  //    key={recipe.id} recipe={recipe} ))

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={[recipeId]} />
      <Card.Body>
        {console.log(setRecipe)}
        <Card.Title>{recipes[recipeId].title}</Card.Title>
        <Card.Text>{recipes[recipeId].quantity}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{recipes[recipeId].ingredients}</ListGroup.Item>

        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
