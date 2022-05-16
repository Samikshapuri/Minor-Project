import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import Img1 from '../assets/images/features/img-1.png';

export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Get yourself tested with Covisure!</h2>
                  <p className="mt-4 text-muted">As the number of cases of COVID-19 continue to fluctuate, local health services are at risk of being overwhelmed with patients requiring intensive care. Providing timely resources lowers the burden on many healthcare systems worldwide as they struggle to treat both COVID-19 patients and maintain essential primary care services.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
      </React.Fragment>
    );
  }
}