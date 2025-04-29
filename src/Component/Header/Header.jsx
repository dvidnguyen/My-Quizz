import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Dvid Nguyen{" "}
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>
            <NavLink to="/users " className="nav-link">
              User
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button class="btn-login" onClick={() => handleLogin()}>
                  Log in
                </button>
                <button class="btn-signup" onClick={() => handleSignUp()}>
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Setting " id="basic-nav-dropdown">
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
