import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Button} from "react-bootstrap";
import React from "react";
import { useState } from "react";

function Resourceshare() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className="resource-nav" lg={2}>
              <Row>
                <div className="account-home-btn d-none d-sm-block">
                  <Link to="/" className="text-primary">
                    <i className="mdi mdi-home h1"></i>
                  </Link>
                </div>
              </Row>
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
                      </Nav.Link>
                      <Nav.Link
                        href="#requests"
                        onClick={() => setModalShow(true)}
                      >
                        Requests
                      </Nav.Link>
                      <Nav.Link href="#map">Map</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col>
            <div className="account-home-btn d-none d-sm-block" onClick={toggleShow}>                  
                    <i className="mdi mdi-menu h1"></i>                  
                </div>
            </Col>
            <Col show={show} onHide={handleClose} lg={3}>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Resourceshare;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Make an offer / request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Post</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Post</Button>
      </Modal.Footer>
    </Modal>
  );
}
