import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar style={{ backgroundColor: 'rgb(209, 209, 209)' }}>
      <Container
        style={{ display: 'flex', justifyContent: 'space-evenly', height: '6  0px' }}
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
          href="/"
        >
          {user ? user.name : 'Гость'}, рецепты для тебя
        </Button>{' '}
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
              href="/favourites"
            >
              Избранное
            </Button>{' '}
            <Button
              style={{
                borderRadius: '20px',
                height: '50px',
                fontSize: '20px',
                paddingTop: '9px',
              }}
              variant="outline-dark"
              onClick={logoutHandler}
              href="/"
            >
              Выйти
            </Button>{' '}
          </>
        ) : (
          <>
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
                <Dropdown.Item>
                  <Link style={{ textDecoration: 'none' }} to="/login">
                    Вход
                  </Link>
                </Dropdown.Item>
                <NavDropdown.Divider />

                <Dropdown.Item>
                  <Link style={{ textDecoration: 'none' }} to="/signup">
                    Регистрация
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Container>
    </Navbar>
  );
}
