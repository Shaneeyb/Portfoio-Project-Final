import React from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <Navbar
        bg="#FFFAF3"
        variant="light"
        style={{
          zIndex: "100",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 30px 0 30px"
        }}
      >
        <div>
          <Navbar.Brand href="/">Shane Burke</Navbar.Brand>
        </div>
        <Nav>
          <Nav.Link href="#recent">Recent Work</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#testimony">Testimonies</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
