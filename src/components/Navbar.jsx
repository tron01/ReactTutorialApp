import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {toggleTheme } from '../features/theme/themeSlice';

const AppNavbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className={`toggle-icon-${theme}`} bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle className={`border-0 toggle-icon-${theme}`} />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Button
              onClick={() => dispatch(toggleTheme())}
              variant={theme === 'dark' ? 'light' : 'dark'}
              className="ms-2"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
