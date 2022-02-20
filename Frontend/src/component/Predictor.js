import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Button,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

import Feature4 from "../assets/images/features/img-4.png";
import LogoDark from "../assets/images/Covisure.png";

export default class Predictor extends Component {
  constructor(props) {
    super(props)
    this.state = {
    name: "",
    temp: null,
    lower_bp: null,
    upper_bp: null,
    card_freq: null,
    spo2: null,
    fever: false,
    hospital_exp: false,
    soar_throat: false,
    loss_of_smell:false,
    loss_of_taste:false,
    musclepain:false,
    pcr:"",
    }
  }
  handlespo2Change = event => {
    this.setState({spo2: event.target.value})
  }
  handlespcrChange = event => {
    this.setState({pcr: event.target.value})
  }
  handlernameChange = event => {
    this.setState({name: event.target.value})
  }
  handletempChange = event => {
    this.setState({temp: event.target.value})
  }
  handlelowerbpChange = event => {
    this.setState({lower_bp: event.target.value})
  }
  handleupperbpChange = event => {
    this.setState({upper_bp: event.target.value})
  }
  handlecardfreqChange = event => {
    this.setState({card_freq: event.target.value})
  }
  handlefeverChange = event => {
    this.setState({fever: event.target.value})
  }
  handlehospitalChange = event => {
    this.setState({hospital_exp: event.target.value})
  }
  handlethroatChange = event => {
    this.setState({soar_throat: event.target.value})
  }
  handlesmellChange = event => {
    this.setState({loss_of_smell:event.target.value})
  }
  handletasteChange = event => {
    this.setState({loss_of_taste:event.target.value})
  }
  handlemuscleChange = event => {
    this.setState({musclepain:event.target.value})
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="/" className="text-primary">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <section className="bg-account-pages vh-100">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="no-gutters align-items-center">
                  <Col lg={12}>
                    <div className="login-box">
                      <Row className="align-items-center no-gutters">
                        <Col lg={6}>
                          <div className="bg-light">
                            <div className="row justify-content-center">
                              <div className="col-lg-10">
                                <div className="home-img login-img text-center d-none d-lg-inline-block">
                                  <div className="animation-2"></div>
                                  <div className="animation-3"></div>
                                  <img
                                    src={Feature4}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Row className="justify-content-center">
                            <Col lg={11}>
                              <div className="p-4">
                                <div className="text-center mt-3">
                                  <Link to="#">
                                    <img src={LogoDark} alt="" height="32" />
                                  </Link>
                                  <p className="text-muted mt-3">
                                    Predict Covid
                                  </p>
                                </div>
                                <div className="p-3 custom-form">
                                  <Form>
                                    <FormGroup>
                                      <Label for="fullname">Full Name</Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        placeholder="Full Name"
                                        value={this.state.name}
                                        onChange={this.handlenameChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="bodytemperature">
                                        Body Temperature
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="userpassword"
                                        placeholder="Enter Body Temperature (&#8451;)"
                                        value={this.state.temp}
                                        onChange={this.handletempChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="bloodpressure">
                                        Upper Blood Pressure
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="userpassword"
                                        placeholder="Enter Upper Blood Pressure"
                                        value={this.state.upper_bp}
                                        onChange={this.handleupperbpChange}
                                      />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                      <Label for="bloodpressure">
                                        Lower Blood Pressure
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="userpassword"
                                        placeholder="Enter Lower Blood Pressure"
                                        value={this.state.lower_bp}
                                        onChange={this.handlelowerbpChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="bloodpressure">
                                        Cardiac Frequency
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="userpassword"
                                        placeholder="Enter Cardiac Frequency"
                                        value={this.state.card_freq}
                                        onChange={this.handlecardfreqChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="spo2level">SpO2 Level</Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        id="userpassword"
                                        placeholder="Enter SpO2 Level"
                                        value={this.state.spo2}
                                        onChange={this.handlespo2Change}
                                      />
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.fever}
                                      onChange={this.handlefeverChange}/>{" "}
                                      <Label check>Having Fever?</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.hospital_exp}
                                      onChange={this.handlehospitalChange}/>{" "}
                                      <Label check>Hospital Exposure</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.soar_throat}
                                      onChange={this.handlethroatChange}/>{" "}
                                      <Label check>Soar Throat</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.loss_of_smell}
                                      onChange={this.handlesmellChange}/>{" "}
                                      <Label check>Loss Of Smell</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.loss_of_taste}
                                      onChange={this.handletasteChange}/>{" "}
                                      <Label check>Loss Of Taste</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input type="checkbox" value={this.state.musclepain}
                                      onChange={this.handlemuscleChange}/>{" "}
                                      <Label check>Muscle Pain</Label>
                                    </FormGroup>

                                    <FormGroup tag="fieldset">
                                      <legend>PCR Results</legend>
                                      <FormGroup check>
                                        <Input name="radio1" type="radio" 
                                        value={this.state.pcr}
                                        onChange={this.handlepcrChange}/>{" "}
                                        <Label check>
                                          Positive
                                        </Label>
                                      </FormGroup>
                                      <FormGroup check>
                                        <Input name="radio1" type="radio" value={this.state.pcr} 
                                        onChange={this.handlepcrChange}/>{" "}
                                        <Label check>
                                          Negative
                                        </Label>
                                      </FormGroup>                          
                                    </FormGroup>
                                    <div className="mt-3">
                                      <Button
                                        color="primary"
                                        className="btn btn-primary btn-block"
                                        block
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                    <div className="mt-4 pt-1 mb-0 text-center">
                                      <p className="mb-0">
                                        Need medical equipments?
                                        <Link
                                          to="/Login"
                                          className="text-success"
                                        >
                                          {" "}
                                          Join Now{" "}
                                        </Link>
                                      </p>
                                    </div>
                                  </Form>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
