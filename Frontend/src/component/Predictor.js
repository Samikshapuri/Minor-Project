import React, {useState} from 'react';

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
import Alert from 'react-bootstrap/Alert'
import Feature4 from "../assets/images/features/img-4.png";
import LogoDark from "../assets/images/Covisure.png";


function Predictor() {
    let p=1;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    //State variables for the input fields 
    const [name, setName] = useState("");
    const [temp, setTemp] = useState("");
    const [lower_bp, setLower_bp] = useState("");
    const [upper_bp, setUpper_bp] = useState("");
    const [card_freq, setCard_freq] = useState("");
    const [spo2, setSpo2] = useState("");
    const [fever, setFever] = useState(0);
    const [hospital_exp, setHospital_exp] = useState(0);
    const [sore_throat, setSore_throat] = useState(0);
    const [loss_of_smell, setLoss_of_smell] = useState(0);
    const [loss_of_taste, setLoss_of_taste] = useState(0);
    const [musclepain, setMusclePain] = useState(0);

    // Sending Predictor Data to the Database
    const handlePredictorSubmit = async (event)=>{

        
        event.preventDefault();
        let _id = Math.random();
        
        const predictor_fields = {
          _id : _id, 
          name : name,
          temp : temp,
          lower_bp : lower_bp,
          upper_bp : upper_bp,
          card_freq : card_freq,
          spo2 : spo2,
          fever : fever,
          hospital_exp : hospital_exp,
          sore_throat : sore_throat,
          loss_of_smell: loss_of_smell,
          loss_of_taste: loss_of_taste,
          musclepain: musclepain
        }
        try{
          const response = await fetch('http://localhost:5000/predictor',{
              method : 'POST',
              body : JSON.stringify(predictor_fields),
              headers : {
                'Content-Type' : 'application/json'
              }
          })
    
          if (!response.ok) {
            console.log(response);
            // get error message from body or default to response status
            const error = response.message || response.status;
            return Promise.reject(error);
          }
          else{
            console.log(response);
          }
        }
        catch(err){
          console.log(err);
          return Promise.reject();
        }

        setName("");
        setTemp("");
        setCard_freq("");
        setUpper_bp("");
        setLower_bp("");
        setSpo2("");

    }
    

    // Handle change functions
    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleTempChange = (event)=>{
      setTemp(event.target.value);
    }

    const handleLowerbpChange = (event)=>{
      setLower_bp(event.target.value);
    }
    
    const handleUpperbpChange = (event)=>{
      setUpper_bp(event.target.value);
    }
 
    const handleCardFreqChange = (event)=>{
      setCard_freq(event.target.value);
    }
    
    const handleSpo2Change = (event)=>{
      setSpo2(event.target.value);
    }
    
    const handleFeverChange = (event)=>{

      if(event.target.checked){
        setFever(1);        
      }
      else{
        setFever(0);
      }
    }
    
    const handleHospital_expChange = (event)=>{
      
      if(event.target.checked){
        setHospital_exp(1);        
      }
      else{
        setHospital_exp(0);
      }  
    }

    const handleSore_throatChange = (event)=>{
      
      if(event.target.checked){
        setSore_throat(1);        
      }
      else{
        setSore_throat(0);
      }
    }

    const handleSmellChange = (event)=>{
      
      if(event.target.checked){
        setLoss_of_smell(1);        
      }
      else{
        setLoss_of_smell(0);
      }
    }
    
    const handleTasteChange = (event)=>{
      
      if(event.target.checked){
        setLoss_of_taste(1);        
      }
      else{
        setLoss_of_taste(0);
      }
    }

    const handleMuscleChange = (event)=>{
      
      if(event.target.checked){
        setMusclePain(1);        
      }
      else{
        setMusclePain(0);
      }
    }
    
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
                                <Form onSubmit={handlePredictorSubmit}>
                                  <FormGroup>
                                    <Label for="fullname">Full Name</Label>
                                    <Input
                                      required
                                      onChange = {handleNameChange}
                                      type="text"
                                      className = "form-control"
                                      placeholder = "Full Name"
                                      value = {name}
                                    />
                                  </FormGroup>
                                  <FormGroup>
                                    <Label for="bodytemperature">
                                      Body Temperature
                                    </Label>
                                    <Input
                                      required
                                      type="number"
                                      className="form-control"
                                      id="userpassword"
                                      placeholder="Enter Body Temperature (&#8451;)"
                                      value={temp}
                                      onChange={handleTempChange}
                                    />
                                  </FormGroup>
                                  
                                  <FormGroup>
                                    <Label for="bloodpressure">
                                      Upper Blood Pressure
                                    </Label>
                                    <Input
                                      type="number" required
                                      className="form-control"
                                      id="userpassword"
                                      placeholder="Enter Upper Blood Pressure"
                                      value={upper_bp}
                                      onChange={handleUpperbpChange}
                                    />
                                  </FormGroup>
                                  
                                  <FormGroup>
                                    <Label for="bloodpressure">
                                      Lower Blood Pressure
                                    </Label>
                                    <Input
                                      type="number" required
                                      className="form-control"
                                      id="userpassword"
                                      placeholder="Enter Lower Blood Pressure"
                                      value={lower_bp}
                                      onChange={handleLowerbpChange}
                                    />
                                  </FormGroup>

                                  <FormGroup>
                                    <Label for="bloodpressure">
                                      Cardiac Frequency
                                    </Label>
                                    <Input required
                                      type="number"
                                      className="form-control"
                                      id="userpassword"
                                      placeholder="Enter Cardiac Frequency"
                                      value={card_freq}
                                      onChange={handleCardFreqChange}
                                    />
                                  </FormGroup>
                                  <FormGroup>
                                    <Label for="spo2level">SpO2 Level</Label>
                                    <Input required
                                      type="number"
                                      className="form-control"
                                      id="userpassword"
                                      placeholder="Enter SpO2 Level"
                                      value={spo2}
                                      onChange={handleSpo2Change}
                                    />
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input  
                                      type="checkbox" 
                                      value = {fever}
                                      onChange = {handleFeverChange}
                                    />{" "}
                                    <Label check>Having Fever?</Label>
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input 
                                      type="checkbox"
                                      value={hospital_exp}
                                      onChange={handleHospital_expChange}
                                    />{" "}
                                    <Label check>Hospital Exposure</Label>
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input 
                                      type="checkbox" 
                                      value={sore_throat}
                                      onChange={handleSore_throatChange}
                                    />{" "}
                                    <Label check>Sore Throat</Label>
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input 
                                      type="checkbox" 
                                      value={loss_of_smell}
                                      onChange={handleSmellChange}
                                    />{" "}
                                    <Label check>Loss Of Smell</Label>
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input 
                                      type="checkbox" 
                                      value={loss_of_taste}
                                      onChange={handleTasteChange}
                                    />{" "}
                                    <Label check>Loss Of Taste</Label>
                                  </FormGroup>

                                  <FormGroup check>
                                    <Input 
                                      type="checkbox" 
                                      value={musclepain}
                                      onChange={handleMuscleChange}
                                    />{" "}
                                    <Label check>Muscle Pain</Label>
                                  </FormGroup>

                                  <div className="mt-3">
                                    <Button
                                      color="primary"
                                      className="btn btn-primary btn-block"
                                      block
                                      onSubmit={() =>{ p==0? setShow(true): setShow1(true)}}
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
      <AlertDismissible
        show={show}
        onHide={() => setShow(false)}
      />
      <AlertDismissible2
        show={show1}
        onHide={() => setShow1(false)}
      />
    </React.Fragment>
    
  );
}

export default Predictor;

function AlertDismissible(props) {
  return (
    <>
      <Alert {...props} variant="success">
        <Alert.Heading>Prediction Results!</Alert.Heading>
        <p>
          You are tested negative!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.onHide} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </>
  );
}
function AlertDismissible2(props) {
  return (
    <>
      <Alert {...props} variant="success">
        <Alert.Heading>Prediction Results!</Alert.Heading>
        <p>
          You are tested positive!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.onHide} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </>
  );
}
