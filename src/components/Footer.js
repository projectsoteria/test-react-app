import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function ({ title, user }) {
  return (
    <Navbar expand="lg" variant="bottom" bg="light">
      <Navbar.Brand href="#">{title}</Navbar.Brand>
    </Navbar>
  );
}
