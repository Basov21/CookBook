import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

export default function RecipeCard({ recipe, handleAddFavourite, user }) {
  return (
    <Card
      style={{
        width: '30rem',
        top: '30px',
        margin: 'auto',
        marginTop: '40px',
        borderRadius: '25px',
      }}
    >
      <Card.Img
        variant="top"
        src={recipe.img}
        style={{ height: '350px', borderRadius: '25px' }}
      />
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outline-dark"
          href={`/recipes/${recipe.id}`}
          style={{
            borderRadius: '35px',
            paddingTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h5 style={{ paddingTop: '5px' }}>{recipe.title}</h5>
        </Button>{' '}
        <Button
          variant="danger"
          disabled={!user}
          onClick={() => handleAddFavourite(recipe.title)}
          style={{
            borderRadius: '35px',
            height: '40px',
            width: '40px',
            paddingBottom: '1px',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          <h3
            style={{ position: 'absolute', top: '-9px', right: '4px', fontSize: '45px' }}
          >
            ♡
          </h3>
        </Button>{' '}
      </Card.Body>

      <tr
        style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '10px' }}
      >
        <th>Количество ингредиентов:</th>
        <th>Время приготовления:</th>
      </tr>
      <tr
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '10px',
        }}
      >
        <td style={{ paddingLeft: '110px' }}>
          <h3>{recipe.quantity}</h3>
        </td>
        <td style={{ paddingRight: '60px' }}>
          <h3>{recipe.time} минут</h3>
        </td>
      </tr>
    </Card>
  );
}
