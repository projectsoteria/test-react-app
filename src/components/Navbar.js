import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ({ title, user }) {
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
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {content}
      </Navbar.Collapse>
    </Navbar>
  );
}
