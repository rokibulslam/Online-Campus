import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">Online-Campus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/about">About Us</Link>
            
            </Nav>
            <Nav>
            <Link href="#deets">Log in</Link>
            <Link eventKey={2} href="#memes">
                Profile
            </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;