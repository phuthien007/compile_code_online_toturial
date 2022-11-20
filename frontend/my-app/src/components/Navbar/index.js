import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

function MyNavBar() {
  let location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}>
            {/* <Link to="/"> */}
            <Link style={{ textDecoration: "none" }} to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            {/* </Link> */}
            <Link style={{ textDecoration: "none" }} to="/problem">
              <Nav.Link href="/problem">Problem</Nav.Link>
            </Link>{" "}
            <Link style={{ textDecoration: "none" }} to="/submission">
              <Nav.Link href="/submission">Submission</Nav.Link>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user">
              <Nav.Link href="/user">User</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {/* display right layout  */}
          <Link style={{ textDecoration: "none" }} to="/login">
            <Nav.Link href="/login" className="mr-2">
              Login
            </Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Link>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
