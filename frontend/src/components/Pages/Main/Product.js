import React from "react";
import { Carousel, Card, Container, Col,  Button } from "react-bootstrap";
import shirt1 from '../../../images/shirt1.png';
import shirt2 from '../../../images/shirt2.png';
import shirt3 from '../../../images/shirt3.png'

const Product = () =>{
    return(
        <>       
 <Carousel fade className="justify-content-md-center" variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shirt1}
          alt="First slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shirt2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shirt3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Card.Footer  style={{textAlignVertical: "center",textAlign: "center",}} className="mb-4">
      <big>Price</big>
<Container className="mt-3">
    <Col>
        <Button  variant="light">Add to cart</Button>
        {"    "}
        <Button  variant="light">Learn More</Button>
    </Col>
</Container>
    </Card.Footer>
      
        </>
    );
};

export default Product;