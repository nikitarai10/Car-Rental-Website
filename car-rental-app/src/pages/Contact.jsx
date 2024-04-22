import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../assets/css/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="mb-5">
        <Container>
          <Row>
            <Col lg="7" md="7" className="contact_form_wrapper">
              <h3 className="fw-bold mb-3" style={{color:"var(--primary)"}}>Get In Touch</h3>

              <Form>
                <FormGroup className="contact_form">
                  <input placeholder="Your Name"  type="text" />
                </FormGroup>
                <FormGroup className="contact_form">
                  <input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact_form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact_btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="4" md="4" className="offset-md-1 contact_info_wrapper">
              <div className="contact_info">
                <h3 className="fw-bold mb-2" style={{color: "var(--primary)"}}>Contact Information</h3>
                <p className="section_description mb-0">
                  123 Baneshwor, Kathmandu
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section_description mb-0">+977983896366</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section_description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social_link_icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
