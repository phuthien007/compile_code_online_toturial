import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

function MyNavBar({ isAuthorized }) {
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
              <Nav.Link href="/" hidden={!isAuthorized}>
                Home
              </Nav.Link>
            </Link>
            {/* </Link> */}
            <Link style={{ textDecoration: "none" }} to="/problem">
              <Nav.Link href="/problem" hidden={!isAuthorized}>
                Problem
              </Nav.Link>
            </Link>{" "}
            <Link style={{ textDecoration: "none" }} to="/submission">
              <Nav.Link href="/submission" hidden={!isAuthorized}>
                Submission
              </Nav.Link>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/user">
              <Nav.Link href="/user" hidden={!isAuthorized}>
                User
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {/* display right layout  */}
          <Link style={{ textDecoration: "none" }} to="/login">
            <Nav.Link href="/login" className="mr-2" hidden={isAuthorized}>
              Login
            </Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Nav.Link href="/signup" hidden={isAuthorized}>
              Sign Up
            </Nav.Link>
          </Link>{" "}
          <Button
            hidden={!isAuthorized}
            onClick={() => {
              localStorage.removeItem("compileTokenApp");
              window.location.href = "/";
            }}
          >
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
