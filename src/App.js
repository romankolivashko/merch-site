import React from "react";
import Header from "./components/Header";
//import Item from "./components/Item";
import ItemControl from "./components/ItemControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(){

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col>
          <h2>Merch #1</h2>
          <ItemControl />
          </Col>
          <Col>
          <h2>Merch #2</h2>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
