import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function SignInPage({ signupHandler }) {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={signupHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Имя</Form.Label>
            <Form.Control name="name" type="text" placeholder="Введите имя" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control name="password" type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Повторите пароль"
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Регистрация
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
