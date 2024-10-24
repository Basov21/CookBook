import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function RecipeCard({recipe}) {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={recipe.img} />
    <Card.Body>
      <Card.Title>{recipe.title}</Card.Title>
      <Card.Text>
        {recipe.quantity}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{recipe.ingredients}</ListGroup.Item>
      {console.log(recipe.ingredients)}
      <ListGroup.Item>{recipe.id}</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  )
}
