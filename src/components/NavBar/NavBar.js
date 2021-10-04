import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    const activeStyle={
            fontWeight: "bold",
            color: "red"
            }
    return (
        <Navbar className="sticky-top navbar" collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand className="fs-4 ">Online-Campus</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="text-decoration-none  fs-4 px-3" activeStyle={activeStyle} to="/home" >Home</NavLink>
                        <NavLink className="text-decoration-none  fs-4 px-3" activeStyle={activeStyle} to="/courses" >Courses</NavLink>
                        <NavLink className="text-decoration-none fs-4 px-3" activeStyle={activeStyle} to="/partner">Partners</NavLink>
                        <NavLink className="text-decoration-none fs-4 px-3" activeStyle={activeStyle} to="/about">About Us</NavLink>
                    
                    </Nav>
                    <Nav>
                        <NavLink className="text-decoration-none fs-4 px-3" activeStyle={activeStyle} to="/deets">Log in</NavLink>
                        <NavLink className = "text-decoration-none fs-4 px-3" activeStyle={activeStyle} to = "/memes" >Profile</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;