import React from "react";
import Header from "../Header";
import Info from "../Info";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";


const Home = () => {
  
    return (
      <div className="Home">
        
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
  
     
      <Info />
      </div>
    );
  }
  
  export default Home;