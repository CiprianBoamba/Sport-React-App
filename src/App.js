import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import './css/App.css';

import Header from './components/header/Header';
import Sportinfo from './components/sports-info/Sportinfo';

function App() {
  return (

    <Container fluid>
        <Row>
          <Col>
            < Header/>  
          </Col>
        </Row>
        <Row>
          <Col>
            <Sportinfo/>
          </Col>
        </Row>
    </Container>
    
  );
}

export default App;
