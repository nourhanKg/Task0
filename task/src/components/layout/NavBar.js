import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavigatinBar() {
  return (
    <Navbar expand="lg" className='bg-main' data-bs-theme="dark">
      <Container fluid className='px-4'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link active' to='/formElements'>Form Elements</Link>
            <Link className='nav-link' to='/UIElements'>UI Elements</Link>
            <Link className='nav-link' to='typographyElements'>Typography Elements</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatinBar;