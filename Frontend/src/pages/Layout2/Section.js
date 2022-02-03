import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import HomeUrl from '../../assets/images/home-border.png';
import Typewriter from 'typewriter-effect';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home home-bg-2" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={9}>
                    <div className="home-content text-center">
                      <p className="mb-0 text-white">Web Portal</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="mt-4 pt-3 home-title text-white">Predict your disease with <span className="element text-primary" data-elements="Covisure"><Typewriter
                              options={{
                                strings: ['Covisure'],
                                autoStart: true,
                                loop: true,
                              }}
                            /></span></h1>

                      <p className="text-white-50 mt-4 f-20">Resource sharing platform <br /> Covid - 19 predictor</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                        
                      </div>
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

export default Section;
