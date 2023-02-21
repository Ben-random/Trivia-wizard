import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Trivia Wizzard</Navbar.Brand>
          <Nav className="me-auto navlink">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="favourites">Favourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
