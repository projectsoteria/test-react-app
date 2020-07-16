import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <PostContainer></PostContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
