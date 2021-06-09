import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Google Book Search</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/saved">Saved Books</Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default Header;
