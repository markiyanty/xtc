import React from "react";
import { Modal} from "react-bootstrap";
import { useState } from "react";
import  '../../css/index.css';
import Button from '@mui/material/Button';

const Agreement = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button type="button" className="button " variant="light" onClick={handleShow}>
        Privacy Policies
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          
            <Modal.Title>User Agreement</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin aliquet ex dignissim hendrerit. Fusce ipsum ante, bibendum vel sem eu, sodales fermentum neque. Nam sodales odio at massa porta, efficitur dapibus magna convallis. Duis sagittis vitae ligula et ultricies. Nullam ut ultricies felis, a sollicitudin tellus. Suspendisse ante erat, elementum ac massa eget, aliquet eleifend augue. Maecenas viverra finibus augue. In bibendum, quam a elementum eleifend, purus erat facilisis arcu, a feugiat quam sem quis metus. Nullam sed ligula porttitor ante commodo aliquam. In pretium, ipsum a vehicula fringilla, risus ex blandit nisl, sed posuere diam orci sed lacus. Cras vel elit tincidunt, euismod enim at, facilisis sapien. Sed turpis ex, feugiat dapibus lectus non, dictum bibendum mi. Sed facilisis laoreet sem. Integer quis urna leo. Pellentesque nisi libero, vehicula sollicitudin congue vel, placerat eu odio.

Proin porttitor mattis dui, sit amet iaculis ante maximus at. Nunc vitae lacus tempor, ornare magna ut, congue mi. Duis porttitor ante ut velit mattis auctor. Duis id tortor et libero ultrices fermentum a vitae purus. In hac habitasse platea dictumst. Vivamus at consectetur ligula, in finibus lectus. In convallis pharetra consectetur. Sed faucibus id nibh in sodales. Vivamus urna nulla, consequat quis tempus vitae, posuere in risus. Sed vestibulum malesuada sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Phasellus sagittis maximus porttitor. Phasellus vitae tellus facilisis, aliquam elit sit amet, consequat diam. Ut tincidunt ligula quis elementum tempus. Donec a mi dui. Cras at commodo justo. Nunc aliquam sollicitudin urna vel ullamcorper. Fusce malesuada cursus cursus. Fusce risus nisl, mattis vel ex at, interdum maximus justo. Quisque a quam a urna pharetra fermentum. Vivamus quis convallis arcu. Sed quis egestas augue. Morbi vel neque sit amet lorem rutrum tincidunt. Praesent tristique libero quis ex sollicitudin, in ullamcorper tortor sagittis.

Nunc eu lorem ut lectus feugiat convallis a vel eros. Nunc libero enim, mollis sit amet mauris ac, tempor sodales nisl. Pellentesque gravida ornare turpis. In nec dapibus tortor. Aliquam a lacus diam. Ut molestie dapibus augue, in dapibus elit commodo in. Nunc porttitor faucibus lectus in feugiat. Donec tempus feugiat accumsan. Curabitur vulputate sagittis leo sit amet finibus. Nullam maximus nisi eu erat convallis interdum vel eu quam.

Nam nec eros libero. Maecenas lacinia, odio scelerisque efficitur vehicula, eros mi consequat risus, sit amet varius arcu ipsum quis nibh. Pellentesque rutrum, velit blandit efficitur consequat, quam mauris lacinia sem, id dapibus magna odio pharetra sem. Quisque blandit nisi magna, quis pellentesque erat eleifend ut. Sed luctus nisi vel faucibus tempus. Fusce eu lacus vulputate, tincidunt justo non, dictum ex. Sed accumsan, leo nec malesuada dapibus, turpis orci maximus ex, nec pellentesque diam mi eget ante. Suspendisse pellentesque et orci id lobortis. Mauris semper, orci vitae tincidunt dapibus, ipsum tellus egestas tortor, sed commodo mauris erat tincidunt velit. Integer scelerisque finibus sodales. Nulla imperdiet imperdiet ex, et euismod libero efficitur vel. Ut a velit sagittis, elementum neque in, ullamcorper eros. Cras porttitor interdum mi, at gravida eros malesuada in.</Modal.Body>
          <Modal.Footer>
          
          <Button  variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Agreement;