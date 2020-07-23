import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostContainer from "./components/PostContainer";
import ArticleContainer from "./components/ArticleContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar title="Project Soteria" user="Shreya"></Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <PostContainer postData={[]}></PostContainer>
          <ArticleContainer articleData={[]}></ArticleContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
