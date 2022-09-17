import React from "react";
import { Modal} from "react-bootstrap";
import { useState } from "react";
import Button from '@mui/material/Button';
import  '../../css/index.css';

const Contacts = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <Button className="button"  variant="light" onClick={handleShow}>
        Contact Us
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          
            <Modal.Title>Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin aliquet ex dignissim hendrerit. Fusce ipsum ante, bibendum vel sem eu, sodales fermentum neque. Nam sodales odio at massa porta, efficitur dapibus magna convallis. Duis sagittis vitae ligula et ultricies. Nullam ut ultricies felis, a sollicitudin tellus. Suspendisse ante erat, elementum ac massa eget, aliquet eleifend augue. Maecenas viverra finibus augue. In bibendum, quam a elementum eleifend, purus erat facilisis arcu, a feugiat quam sem quis metus. Nullam sed ligula porttitor ante commodo aliquam. In pretium, ipsum a vehicula fringilla, risus ex blandit nisl, sed posuere diam orci sed lacus. Cras vel elit tincidunt, euismod enim at, facilisis sapien. Sed turpis ex, feugiat dapibus lectus non, dictum bibendum mi. Sed facilisis laoreet sem. Integer quis urna leo. Pellentesque nisi libero, vehicula sollicitudin congue vel, placerat eu odio.

Proin porttitor mattis dui, sit amet iaculis ante maximus at. Nunc vitae lacus tempor, ornare magna ut, congue mi. Duis porttitor ante ut velit mattis auctor. Duis id tortor et libero ultrices fermentum a vitae purus. In hac habitasse platea dictumst. Vivamus at consectetur ligula, in finibus lectus. In convallis pharetra consectetur. Sed faucibus id nibh in sodales. Vivamus urna nulla, consequat quis tempus vitae, posuere in risus. Sed vestibulum malesuada sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus.

</Modal.Body>
          <Modal.Footer>
          
          <Button  variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Contacts;