import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row, Button, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

import Feature4 from '../assets/images/features/img-4.png';
import LogoDark from '../assets/images/Covisure.png';


function SignUp() {

  const [usernameSign, setUsernameSign] = useState('');
  const [emailSign, setEmailSign] = useState('');
  const [passwordSign, setPasswordSign] = useState('');

  // Submit Handler
  const registerSubmitHandler = async (event)=>{
    event.preventDefault();

    const registerData = {
      username : usernameSign,
      email : emailSign,
      password : passwordSign
    }
    
    // Sending to Database...
    try{
      const userAdded = await fetch('http://localhost:5000/users/register',{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      //Error handling
      if (!userAdded.ok) {
        console.log(userAdded);
        // get error message from body or default to response status
        const error = userAdded.message || userAdded.status;
        return Promise.reject(error);
      }
      else{
        console.log(userAdded);
      }
    }
    catch(err){
      console.log("Register error" + err);
      return Promise.reject();
    }

    // Controlled state
    setEmailSign('');
    setPasswordSign('');
    setUsernameSign('');
  } 
  

  // Input change Handlers
  const handleUserSignChange = (event)=>{
    setUsernameSign(event.target.value);
  }

  const handleEmailSignChange = (event)=>{
    setEmailSign(event.target.value);
  }

  const handlePasswordSignChange = (event)=>{
    setPasswordSign(event.target.value);
  }


  return (
    <React.Fragment>
        <div className="account-home-btn d-none d-sm-block">
        <Link to="/" className="text-primary"><i className="mdi mdi-home h1"></i></Link>
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
                                <div
                                  className="home-img login-img text-center d-none d-lg-inline-block">
                                  <div className="animation-2"></div>
                                  <div className="animation-3"></div>
                                  <img src={Feature4} className="img-fluid" alt="" />
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
                                  <Link to="#"><img src={LogoDark} alt=""
                                    height="32" /></Link>
                                  <p className="text-muted mt-3">Sign up for a new Account</p>
                                </div>
                                <div className="p-3 custom-form">
                                  <Form onSubmit={registerSubmitHandler}>
                                    <FormGroup>
                                      <Label for="firstname">First Name</Label>
                                      <Input required
                                        value = {usernameSign}
                                        onChange = {handleUserSignChange}
                                        type="text" 
                                        className="form-control" 
                                        id="firstname" 
                                        placeholder="First Name" 
                                      />
                                    </FormGroup>

                                    <FormGroup>
                                      <Label for="email">Email</Label>
                                      <Input required
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Enter Email" 
                                        value = {emailSign}
                                        onChange = {handleEmailSignChange}
                                      />
                                    </FormGroup>

                                    <FormGroup>
                                      <Label for="userpassword">Password</Label>
                                      <Input required
                                        type="password" 
                                        className="form-control" 
                                        id="userpassword" 
                                        placeholder="Enter password" 
                                        value = {passwordSign}
                                        onChange = {handlePasswordSignChange}
                                      />
                                    </FormGroup>

                                    <div className="custom-control custom-checkbox">
                                      <Input type="checkbox" className="custom-control-input" required
                                        id="customControlInline" />
                                      <Label className="custom-control-label"
                                        for="customControlInline">Remember me</Label>
                                    </div>

                                    <div className="mt-3">
                                      <Button color="primary" className="btn btn-primary btn-block" block>Sign in</Button>
                                    </div>

                                    <div className="mt-4 pt-1 mb-0 text-center">
                                      <p className="mb-0">Don't have an account ?
                                      <Link to="/Login" className="text-success"> Sign in</Link></p>
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

export default SignUp;

