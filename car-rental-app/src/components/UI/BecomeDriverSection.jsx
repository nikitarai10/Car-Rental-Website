import React from 'react';
import '../../assets/css/becomeDriverSection.css';
import { Container, Row , Col } from 'reactstrap';

import driverImg from '../../assets/images/toyota-offer-2.png';

const BecomeDriverSection = () => {
  return (
    <section className="become_driver">
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12' className='become_driver_img'>
                <img src={driverImg} alt="img" className='w-100' />
                </Col>

                <Col lg='6' md='6' sm='12'>
                <h3 className="section_title become_driver_title">
                    Do you want to earn with US? So don't be Late
                </h3>

                <button className="become_driver_btn mt-4">
                    Become a Driver
                </button>

                </Col>

            </Row>
        </Container>
    </section>
  );
};

export default BecomeDriverSection;