import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="fs-3" Link="/home">Online-Campus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className="text-decoration-none fs-3 p-3" to="/home">Home</Link>
            <Link className="text-decoration-none fs-3 p-3" to="/courses">Courses</Link>
            <Link className="text-decoration-none fs-3 p-3" to="/partner">Partners</Link>
            <Link className="text-decoration-none fs-3 p-3" to="/about">About Us</Link>
            
            </Nav>
            <Nav>
            <Link className="text-decoration-none fs-3 p-3" to="#deets">Log in</Link>
            <Link Link className = "text-decoration-none fs-3 p-3"
            eventKey = {
                2
            }
            to = "#memes" >
                Profile
            </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;