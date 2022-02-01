import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal,  Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function resourceshare() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-primary">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <Container fluid>
          <Row>
            <Col className="resource-nav" lg={2}>
              <Navbar collapseOnSelect expand="lg" variant="light" fixed="left">
                <Container className="resource-nav-column">
                  <Navbar.Brand href="#home">Resource-Sharing</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="nav-resource-collapse"
                  >
                    <Nav className="me-auto" justify variant="tabs">
                      <Nav.Link
                        href="#offers"
                        onClick={() => setModalShow(true)}
                      >
                        &nbsp; Offers &nbsp;
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </Nav.Link>
                      <Nav.Link href="#requests">Requests</Nav.Link>
                      <Nav.Link href="#map">Map</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col lg={6}></Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default resourceshare;
