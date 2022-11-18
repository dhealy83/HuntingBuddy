import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";

import "./Footer.css";

function Footer() {
  // Handles the actions in the dropdown menu to load modal.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          fixed="bottom"
          className="navbar mb-0"
        >
          <Container fluid className="">
            <Navbar.Brand href="#" className="brand p-4 fs-1">
              Layers and Tools
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="bottom"
              className=""
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Layers and tools
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offCanvasBody">
                <Nav className="justify-content-end flex-grow-1 ms-0 pe-3 m-1">
                  <Nav.Link href="#action1">Map Layers</Nav.Link>
                  <Nav.Link href="#action2">Hunting Layers</Nav.Link>
                  <NavDropdown
                    title="Pin Points"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    drop="up"
                  >
                    <NavDropdown.Item href="#action3">Access</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Deer</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Downed Animals
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleShow} drop="up">
                      Drop New Pin
                    </NavDropdown.Item>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Footer;
