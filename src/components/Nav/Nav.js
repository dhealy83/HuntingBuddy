import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";

// Imported Profile image
import mockProfileImage from "./Assets/mockProfileImage.jpg";

const Nav = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Hunting Buddy
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hunting Buddy</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={mockProfileImage}
              />
              <Figure.Caption>DAvid Healy</Figure.Caption>
            </Figure>
            <ListGroup.Item>David Healy</ListGroup.Item>
            <ListGroup.Item>Account Information</ListGroup.Item>
            <ListGroup.Item>UPGRADE</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;
