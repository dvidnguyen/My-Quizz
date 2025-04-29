import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {NavLink,useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin =()=>{
    navigate('/login');
  }
  const handleSignUp =()=>{
    navigate('/register');
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">Dvid Nguyen </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/admins" className="nav-link">Admin</NavLink>
            <NavLink to="/users " className="nav-link">User</NavLink>
          </Nav>
          <Nav>
            <button class="btn-login" onClick={()=>handleLogin()}>Log in</button>
            <button class="btn-signup" onClick={()=>handleSignUp()}>Sign up</button>
            {/* <NavDropdown title="Setting " id="basic-nav-dropdown">
              <NavDropdown.Item >Login</NavDropdown.Item>
              <NavDropdown.Item >Log out</NavDropdown.Item>
              <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
