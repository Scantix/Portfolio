import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Header.css';
import logoImg from "../assets/images/Scantic BG Remove.png"


const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className="py-3">
      <Container fluid className="px-4 px-md-5">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logoImg}
            height="30"
            className="d-inline-block align-top"
            alt="Scantix logo"
          />
          <div className="brand-separator mx-2"></div>
          <span className={`ps-2 brand-name ${darkMode ? 'text-light' : 'text-dark'}`}>SCANTIX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto brand-name ${darkMode ? 'text-light' : 'text-dark'}`}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button 
              onClick={toggleDarkMode} 
              variant="link" 
              className={`p-0 me-3 ${darkMode ? 'text-light' : 'text-dark'}`}
            >
              <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </Button>
            <Button variant="primary" className="contact-us-btn">
              Contact Us <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;