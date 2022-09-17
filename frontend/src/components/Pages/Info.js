
import React from 'react';
import { Nav, Container, Row} from 'react-bootstrap';
import apple from '../../images/apple.png'
import google from '../../images/google.png'
import visa from '../../images/visa.png'
import master from '../../images/master.png'
import '../../css/index.css';
import Agreement from '../InfoTabs/PrivacyPolicies';
import Delivery from '../InfoTabs/Delivery';
import Contacts from '../InfoTabs/Contacts';
import Responses from '../InfoTabs/Responses';


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
      <Agreement/>
      <Delivery/>
      <Contacts/>
      <Responses/>
      </Nav>
     
      </Row>

    </Container>
 
        </div>
     
    
          
     );
     
    
}

export default Info;