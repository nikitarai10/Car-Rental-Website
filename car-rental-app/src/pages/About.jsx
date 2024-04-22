import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import OutMembers from "../components/UI/OutMembers";
import driveImg from "../assets/images/drive.jpg";
import '../assets/css/about.css';

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />

      <section className="about_page_section mt-5 py-4">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about_page_img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about_page_content">
                <h2 className="section_title mb-2">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section_description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section_description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className="mt-4">
                    <h6 className="section_help_subtitle">Need Any Help?</h6>
                    <h6 className="d-flex align-items-center">
                    <span className="fs-5">
                    <i className="ri-phone-line"></i>
                  </span>+00123456789</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-5 py-3">
        <BecomeDriverSection />
      </section>

      <section className="mt-5 py-3 members_section">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h4 className="section_subtitle mb-2">Experts</h4>
              <h2 className="section_title">Our Members</h2>
            </Col>
            <OutMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
