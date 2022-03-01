import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Modal,
  Button,
  Form,
  FormControl,
  Card,
} from "react-bootstrap";
import React from "react";
import { useState } from "react";
import MapResources from "./MapResources";

const USERS = [
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    topics: "Topics",
    icon: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Name",
    location: "Location",
    des: "Description of your equipments",
    src: "https://images.pexels.com/photos/5206942/pexels-photo-5206942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }
];

function Resourceshare() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [name, setName] = useState("");
  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="resource-sharing-page">
      <React.Fragment>
        <Navbar className="resource-navbar">
          <Container>
            <Navbar.Brand href="#home">Resoure Sharing</Navbar.Brand>
            <div
              className="account-home-btn d-none d-sm-block"
              onClick={toggleShow}
            >
              <i className={show?"mdi mdi-menu h1":"mdi mdi-close h3"}></i>
            </div>
          </Container>
        </Navbar>
        <Container fluid>
          <Row className="resource-row">
            <Col className="resource-nav" lg={show ? 2 : 1}>
              <Navbar collapseOnSelect expand="lg" variant="light" fixed="left">
                <Container className="resource-nav-column">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="nav-resource-collapse"
                  >
                    <Nav className="me-auto" justify variant="tabs">
                      <Nav.Link href="/">
                        <i className="mdi mdi-home h4"></i>
                        {show ?  "Home":""}
                      </Nav.Link>
                      <Nav.Link
                        href="#offers"
                        onClick={() => setModalShow(true)}
                      >
                        <i className="mdi mdi-account-multiple h4"></i>
                        {show ? "Offers" : ""}
                      </Nav.Link>
                      <Nav.Link
                        href="#requests"
                        onClick={() => setModalShow1(true)}
                      >
                        <i className="mdi mdi-account-plus h4"></i>
                        {show ? "Requests" : ""}
                      </Nav.Link>
                      <Nav.Link href="/resourceshare">
                        {" "}
                        <i className="mdi mdi-google-maps h4"></i>
                        {show ? "Map" : ""}
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col lg={7} className="col-2-res">
              <MapResources />
            </Col>
            <Col
              show={show}
              onHide={handleClose}
              className={show ? "hidden-col2" : "rightmost-col2"}
              lg={show ? 0 : 4}
            >
              <Container className="resource-list-container">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Filter by location and keywords"
                    className="me-2"
                    aria-label="Search"
                    value={name}
                    onChange={filter}
                  />
                </Form>
                <div className="resource-list-div">
                  <Row>
                    {foundUsers && foundUsers.length > 0 ? (
                      foundUsers.map((USERS) => (
                        <Col lg={6} md={4} className="user-list">
                          <Card className="posts">
                            <Card.Body>
                              <Card.Text>
                                {USERS.name}
                                <br></br>
                                {USERS.location}
                              </Card.Text>

                              <Card.Img variant="bottom" src={USERS.src} />
                              <Card.Title>{USERS.title}</Card.Title>
                              <Card.Text>{USERS.des}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                    ) : (
                      <h1>No results found!</h1>
                    )}
                  </Row>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyCenteredModal show={modalShow1} onHide={() => setModalShow1(false)} />
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
          Make an offer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            as={Col}
            className="mb-3 form-post"
            controlId="formPlaintextPassword"
          >
            <Form.Control
              required
              type="password"
              placeholder="What help can you offer?"
              value={USERS.title}
            />
            <br></br>
            <Form.Control
              required
              as="textarea"
              type="password"
              placeholder="Add a description"
              rows={4}
              value={USERS.des}
            />
          </Form.Group>
          <hr></hr>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Topics
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Add atleast 3 topics"
                value={USERS.topics}
              />
            </Col>
          </Form.Group>
          <hr></hr>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextname">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Organization's Name"
                value={USERS.name}
              />
            </Col>
          </Form.Group>{" "}
          <hr></hr>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextlocation"
          >
            <Form.Label column sm="2">
              Location
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Add your location"
                value={USERS.location}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formFile" className="mb-3">
            <Form.Label column sm="2">
              <i className="mdi mdi-folder-multiple-image h4"></i>Add Image
            </Form.Label>
            <Col sm="10">
              <Form.Control required type="file" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Post</Button>
      </Modal.Footer>
    </Modal>
  );
}

//Request

function MyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Make a request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            as={Col}
            className="mb-3 form-post"
            controlId="formPlaintextPassword"
          >
            <Form.Control
              type="password"
              placeholder="What help can you offer?"
            />
            <br></br>
            <Form.Control
              as="textarea"
              type="password"
              placeholder="Add a description"
              rows={4}
            />
          </Form.Group>
          <hr></hr>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Topics
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Add atleast 3 topics" />
            </Col>
          </Form.Group>
          <hr></hr>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextname">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Organization's Name" />
            </Col>
          </Form.Group>{" "}
          <hr></hr>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextlocation"
          >
            <Form.Label column sm="2">
              Location
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Add your location" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formFile" className="mb-3">
            <Form.Label column sm="2">
              <i className="mdi mdi-folder-multiple-image h4"></i>Add Image
            </Form.Label>
            <Col sm="10">
              <Form.Control type="file" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Post</Button>
      </Modal.Footer>
    </Modal>
  );
}
