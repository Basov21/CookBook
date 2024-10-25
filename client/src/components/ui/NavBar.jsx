import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ user, logoutHandler }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Navbar style={{ backgroundColor: 'rgb(209, 209, 209)' }}>
      <Container
        style={{ display: 'flex', justifyContent: 'space-evenly', height: '60px' }}
      >
        <Button
          style={{
            borderRadius: '20px',
            width: '250px',
            height: '50px',
            fontSize: '20px',
            paddingTop: '9px',
          }}
          variant="outline-success"
          onClick={() => handleNavigate('/')}
        >
          {user ? user.name : 'Гость'}, рецепты для тебя
        </Button>
        {user ? (
          <>
            <Button
              style={{
                borderRadius: '20px',
                height: '50px',
                fontSize: '20px',
                paddingTop: '9px',
              }}
              variant="danger"
              onClick={() => handleNavigate('/favourites')}
            >
              Избранное
            </Button>
            <Button
              style={{
                borderRadius: '20px',
                height: '50px',
                fontSize: '20px',
                paddingTop: '9px',
              }}
              variant="outline-dark"
              onClick={() => {
                logoutHandler();
                handleNavigate('/');
              }}
            >
              Выйти
            </Button>
          </>
        ) : (
          <Dropdown>
            <Dropdown.Toggle
              style={{
                borderRadius: '20px',
                height: '50px',
                fontSize: '20px',
                paddingTop: '9px',
              }}
              variant="success"
              id="dropdown-basic"
            >
              Вход/Регистрация
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleNavigate('/login')}>
                Вход
              </Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item onClick={() => handleNavigate('/signup')}>
                Регистрация
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
}

