import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/500px-Korb_mit_Br%C3%B6tchen.JPG" height="680" width= "790"/>
          <Card.Body background-color= "#FFB6C1">
            <Card.Text>
              This article is about bread, and everything that bread is a fan of. How bread originated, where bread came from, who bread is. Bread!
            </Card.Text>
            <Button variant="outline-info" src="google.com">Info</Button>{' '}
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
