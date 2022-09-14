import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from '../images/logo.png'
import cartImage from '../images/cart.png'
import profileImage from '../images/profile.png'

const Header = () => {
    return (
       <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/" className='mt-1' >
            <img
              alt=""
              src={logo} 
              width="45"
              height="40"
              className=""
              responsive/>{' '}
        XTC DUMBSOLUTIONS
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end ">
          <Nav>
            <Nav.Link href="/profile"><img
              alt=""
              src={profileImage}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}</Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
            <img
              alt=""
              src={cartImage}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            </Nav.Link>
            <NavDropdown title="EN" id="collasible-nav-dropdown" className="mt-1">
              <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">UA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ESP</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EUR" id="collasible-nav-dropdown" className="mt-1">
              <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">UAH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">USD</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   
   
      
    );
}

export default Header;