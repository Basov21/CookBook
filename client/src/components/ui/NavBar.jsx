import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link as RouterLink} from 'react-router-dom';


export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar style={{backgroundColor: 'rgb(200, 255, 235)'}}>
      <Container style={{display: 'flex', justifyContent: 'space-evenly', height: '100px' }}>
        <Button variant="success" href="/">
          {user ? user.name : 'Гость'}, рецепты для тебя
        </Button>{' '}
        {user ? (
          <>
            <Button variant="outline-danger" href="/favourites">
              Избранное
            </Button>{' '}
            <Button variant="outline-info" onClick={logoutHandler} href="/">
              Выйти
            </Button>{' '}
          </>
        ) : (
          <>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
              Вход/Регистрация
            </Dropdown.Toggle>

            <Dropdown.Menu>
              
            <Dropdown.Item >
                <Link style={{ textDecoration: 'none' }} to="/login">Вход</Link>
                </Dropdown.Item>
              
                
                <Dropdown.Item >
                <Link style={{ textDecoration: 'none' }} to="/signup">Регистрация</Link>
                </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          </>
        )}
      </Container>
    </Navbar>
  );
}
