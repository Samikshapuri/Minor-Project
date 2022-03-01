import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row, Button, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

import Feature4 from '../assets/images/features/img-4.png';
import LogoDark from '../assets/images/Covisure.png';


function Login() {

  // State variables for user input
  const [userEmailLogin, setUserEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState(''); 

  // Input Change Handlers
  const handleUserloginChange = (event)=>{
    setUserEmailLogin(event.target.value);
  }
  
  const handlePasswordLoginChange = (event)=>{
    setPasswordLogin(event.target.value);
  }

  //Checking for Login from database
  const handleLogin = async (event)=>{
    event.preventDefault();

    const loginData = {
      email : userEmailLogin,
      password : passwordLogin
    }
    
    // Sending to Database...
    try{
      const userLoggedIn = await fetch('http://localhost:5000/users/login',{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      //Error handling
      if (!userLoggedIn.ok) {
        console.log(userLoggedIn);
        // get error message from body or default to response status
        const error = userLoggedIn.message || userLoggedIn.status;
        return Promise.reject(error);
      }
      else{
        console.log(userLoggedIn);
        const data = userLoggedIn.json();

        if(data.user){
            alert('Login successful');
        } else{
            alert('Please check your userEmail and password')
        }
      }
    }
    catch(err){
      console.log("Register error" + err);
      return Promise.reject();
    }

    // Controlled state 
    setUserEmailLogin('');
    setPasswordLogin('');
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
                <Row>
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
                                  <p className="text-muted mt-3">Sign in to continue to Covisure.</p>
                                </div>
                                <div className="p-3 custom-form">
                                  
                                  <Form onSubmit={handleLogin}>
                                    <FormGroup>
                                      <Label for="useremail">User Email</Label>
                                      <Input  
                                        type="email"  
                                        className="form-control" 
                                        id="useremail"
                                        placeholder="Enter email"
                                        value = {userEmailLogin} 
                                        onChange = {handleUserloginChange}
                                      />
                                    </FormGroup>

                                    <FormGroup>
                                      <Label for="userpassword">Password</Label>
                                      <Input 
                                        type="password" 
                                        className="form-control"
                                        id="userpassword" 
                                        placeholder="Enter password" 
                                        value = {passwordLogin}
                                        onChange = {handlePasswordLoginChange}
                                      />
                                    </FormGroup>

                                    <div className="custom-control custom-checkbox">
                                      <Input type="checkbox" className="custom-control-input"
                                        id="customControlInline" />
                                      <Label className="custom-control-label"
                                        for="customControlInline">Remember me</Label>
                                    </div>
                                    
                                    <div className="mt-3">
                                      <Button color="primary" className="btn btn-primary btn-block" block>Log In</Button>{" "}
                                    </div>
                                    
                                    <div className="mt-4 pt-1 mb-0 text-center">
                                      <Link to="/ForgotPassword" className="text-dark"><i
                                        className="mdi mdi-lock"></i> Forgot your
                                                                    password?</Link>
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

export default Login;

