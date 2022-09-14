
import React from 'react';
import { Nav, Container, Row, Button} from 'react-bootstrap';
import apple from '../images/apple.png'
import google from '../images/google.png'
import visa from '../images/visa.png'
import master from '../images/master.png'
import '../css/index.css';
import Agreement from './Agreement';

const Info = () => {
    return (
        <div className="footer">
       <Container>
       <Row>
       <Nav className="justify-content-center">
            <Nav.Link ><img
              alt=""
              src={apple}
              width="45"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}</Nav.Link>
            <Nav.Link eventKey={2}>
            <img
              alt=""
              src={google}
              width="45"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            </Nav.Link>
            <Nav.Link eventKey={2} href="/cart" >
            <img
              alt=""
              src={visa}
              width="50"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            </Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
            <img
              alt=""
              src={master}
              width="45"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            </Nav.Link>
          </Nav>
      </Row>
      <Row>
      <Nav className="justify-content-center" >
      <Button className=""  onClick={()=>{return(<Agreement></Agreement>)}}>User Agreement</Button>
            <Nav.Item href="/home" >
            <Nav.Link href="#link"><h4 className="linkText">Delivery</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="#link"><h4 className="linkText">Contacts</h4></Nav.Link>
        </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#link"><h4 className="linkText">Responses</h4></Nav.Link>
        </Nav.Item>
      </Nav>
     
      </Row>
  
    </Container>
        </div>
     
       
          
     );
}

export default Info;