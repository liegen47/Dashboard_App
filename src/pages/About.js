import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import Aboutcard from "../components/AboutCard";
import laptopImg from "../Assets/about.png";
import MyNavbar from "../components/MyNavbar";
import "../components/scss/About.scss";

function About() {
  return (
    <div>
      <MyNavbar />
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={7} className="text-center mb-4 mb-md-0">
              <h1 className="about-title">Know Who I'M</h1>
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;
