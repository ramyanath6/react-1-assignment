import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import Body from './Body';
import Footer from './Footer';
// import Footer from './Footer';

const App = () => {
  return (
    <div>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{backgroundColor:'gray'}}>
        <Navbar.Brand href="#home">మన ఇంటిరుచులు<img src="img1.jpg" height={30} width={30}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{color:'black'}}>Home</Nav.Link>
            <NavDropdown title="సంప్రదాయ రుచులు" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">పప్పు ఆవకాయ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              చిరుతిల్లు
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">తీపి</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              కారం
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Continental" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pizza varieties</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Burger Varieties
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soft Drinks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ice-Creams
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <Body/>
    <br></br>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App
