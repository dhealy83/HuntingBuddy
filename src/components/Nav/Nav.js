import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";

// Imported Profile image
import mockProfileImage from "./Assets/mockProfileImage.jpg";
import hb from "./Assets/hb.png";

const Nav = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="navbar-toggler m-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleShow}
      >
        <img src={hb} alt="David Healy, DH logo." width="30" height="30" />
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
