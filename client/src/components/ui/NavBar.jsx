import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Container>
        <Button variant="outline-secondary" href="/">
          {user ? user.name : 'Гость'}, эти рецепты для тебя
        </Button>{' '}
        {user ? (
          <>
            <Button variant="outline-danger" href="/favorites">
              Избранное
            </Button>{' '}
            <Button variant="outline-info" onClick={logoutHandler}>
              Выйти
            </Button>{' '}
          </>
        ) : (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Вход/Регистрация
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/login">Вход</Link></Dropdown.Item>
              
              <Dropdown.Item><Link to="/signup">Регистрация</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
}
