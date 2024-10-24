import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


export default function RecipeCard({ recipe }) {
  return (
    <Card style={{ width: '35rem', top: '30px', margin: 'auto', marginTop: "40px"}}>
      <Card.Img variant="top" src={recipe.img} />
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outline-secondary" href={`/recipes/${recipe.id}`}>
          {recipe.title}
        </Button>{' '}
        <Button variant="danger">В избранное</Button>{' '}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Количество ингредиентов: {recipe.quantity}</ListGroup.Item>
        <ListGroup.Item>Время приготовления: {recipe.time}</ListGroup.Item>
      </ListGroup>      
    </Card>
  );
}
