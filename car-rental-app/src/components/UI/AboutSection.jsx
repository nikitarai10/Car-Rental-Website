import React from 'react';
import {Container, Row,Col} from 'reactstrap';
import '../../assets/css/aboutSection.css';
import aboutImg from '../../assets/images/cars-img/bmw-offer.png';

const AboutSection = ({aboutClass}) => {
  return (
  <section className='about_section' style={aboutClass === 'aboutPage' ? {marginTop:'0px'} : {marginTop: '230px'}}>
    <Container>
      <Row>
        <Col lg='6' md='6'>
        <div className="about_section_content">
          <h3 className="section_about_subtitle mb-2">About Us</h3>
          <h2 className="section_title mb-2">Welcome to car rent service</h2>
          <p className="section_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis consectetur inventore non animi cupiditate iusto commodi dolor, adipisci sed suscipit numquam minus. Debitis nesciunt inventore atque alias distinctio doloremque.
          </p>

          <div className="about_section_item d-flex align-items-center">
            <p className="section_description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Lorem ipsum dolor sit amet .
            </p>
            <p className="section_description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Lorem ipsum dolor sit amet .
            </p>
          </div>

          <div className="about_section_item d-flex align-items-center">
            <p className="section_description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Lorem ipsum dolor sit amet .
            </p>
            <p className="section_description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Lorem ipsum dolor sit amet .
            </p>
          </div>

        </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="about_img">
            <img src={aboutImg} alt="about-img" className='w-100' />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default AboutSection;