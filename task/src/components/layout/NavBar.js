import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
function NavigatinBar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className='py-0'>
      <Container className='bg-main py-3'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='/' activeclassname="active">Dependancies</NavLink>
            <NavLink className='nav-link' to='/formElements' activeclassname="active">Form Elements</NavLink>
            <NavLink className='nav-link' to='/UIElements' activeclassname="active">UI Elements</NavLink>
            <NavLink className='nav-link' to='typographyElements' activeclassname="active">Typography Elements</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatinBar;