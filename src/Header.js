import React from 'react';
import { Container, Nav, Image, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './css/header.css';



function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container className='header'>
    
          <Nav.Link href='/'>  <Image src='https://enterpriseleague.com/public/img/logo-header.svg' ></Image> </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto col-md-10 navtext">
              <NavDropdown title="Product" id="basic-nav-dropdown" >
                <NavDropdown.Item  href='ooops'>Action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='ooops'>Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href='ooops'>Action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='ooops'>Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href='ooops'>Action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='ooops'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='ooops'>Separated link</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              <div className="col-md-2 buttons">
                <Button variant="light"  >Log in</Button>
                <Button variant="primary" style={{ backgroundColor: "rgb(33,137,209)", }}>Get started</Button>{' '}
              </div>
       
          </Navbar.Collapse>
          
      </Container>
    </Navbar>
    
    


  );
}

export default Header;
