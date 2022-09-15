// react
import React from "react";

// react router
import { LinkContainer } from "react-router-bootstrap";

// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaExternalLinkAlt,
  } from "react-icons/fa";


import "./Navigation.css";

class Navigation extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
          <Container>
            <LinkContainer to="../">
              <Navbar.Brand>
                {"RBHS Game Development"}
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="../">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="../about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="../sponsors">
                  <Nav.Link>Resources</Nav.Link>
                </LinkContainer>
                <LinkContainer to="../events">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                  <LinkContainer to="#">
                    <NavDropdown.Item>Unity</NavDropdown.Item>
                  </LinkContainer>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
                
              </Nav>
              <Nav className="smicons">
                <Nav.Link
                  href="https://www.instagram.com/rbhs.gamedev/"
                  target="_blank"
                >
                  <FaInstagram />
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/ksthakkar/rb-game-dev"
                  target="_blank"
                >
                  <FaGithub />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
  
  export default Navigation;