import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./Navigation.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Navigation() {
  const { navigate } = useContext(DataContext);
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Trivia Wizzard</Navbar.Brand>
          <Nav className="me-auto navlink">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/favourites");
              }}
            >
              Favourites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
