import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function ({ title, user }) {
  return (
    <Navbar fixed="bottom" expand="lg" variant="bottom" bg="success">
      <Navbar.Brand href="/home">{title}</Navbar.Brand>
    </Navbar>
  );
}
