import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Agreement from './components/Agreement';
import Header from './components/Header';
import Info from './components/Info';
import Product from './components/Product';
import { useState } from 'react';



function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      
    <Header/>
    
    <Container className='mt-4 mb-4 ' style={{
        width: '45%', height: '55%'
      }}>
      <Col >
      <Row >
      <Product/>
      </Row>
      <Row>
      <Product/>
      </Row>
      </Col>
  
    </Container>
    { show && 

      <Agreement />

    }
   
    <Info />
    </div>
  );
}

export default App;
