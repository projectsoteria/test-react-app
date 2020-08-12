import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ({ title, user, onSelect }) {
  let content = undefined;
  console.log(user);
  if (user === undefined) {
    ///content is button that says sign in
    content = (
      <Form inline>
        <Button variant="primary">Sign In</Button>
      </Form>
    );
  } else {
    ///text says signed in user is username
    content = (
      <Navbar.Text>
        Signed in as: <a href="#login">{user}</a>
      </Navbar.Text>
    );
  }
  return (
    <Navbar>
      <Navbar.Brand href="/home">{title}</Navbar.Brand>
      <Nav
        defaultActiveKey="/home"
        onSelect={(selectedKey) => onSelect(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Articles">Articles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Posts">Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="About">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {content}
      </Navbar.Collapse>
    </Navbar>
  );
}
