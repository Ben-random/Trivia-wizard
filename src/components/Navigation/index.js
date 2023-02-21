import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" className="mb-4">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as="div">
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link as="div">
              <NavLink to="/favourites">Favourites</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
