import React from "react";
import { Container, Row, Col } from 'reactstrap';

import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServiceList from "../components/UI/ServiceList";
import CarItem from "../components/UI/CarItem";
import CarData from "../data/CarData";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
    return <Helmet title='Home'>
            {/* ----------hero-section----------------- */}
            <section className="p-0 hero_slider_section">
                <HeroSlider />

                <div className="hero_form">
                    <Container>
                        <Row className="form_row" >
                            <Col lg='4' md='4'>
                                <div className="find_cars_left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>

                            <Col lg='8' md='8' sm='12'>
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* ----------about-section----------------- */}

            <section className="home_about_section ">
            <AboutSection />
            </section>

            {/* ------------services-section------------------ */}
            <section className="service_section_wrapper" style={{marginTop:'5rem'}}>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-4 text-center">
                            <h3 className="section_service_subtitle mb-2" style={{color:"var(--secondary)"}} > See our </h3>
                            <h2 className="section_title mb-2"> Popular Services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/* --------------------car-offer-section-------------- */}
            <section className="car_offer_section" style={{marginTop:"5rem"}}>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h3 className="section_car_offer_subtitle mb-2" style={{color:"var(--secondary)"}}> Come with </h3>
                            <h2 className="section_title mb-2">Hot Offers</h2>
                        </Col>

                        {
                            CarData.slice(0,6).map((item)=>(
                                <CarItem item={item} key={item.id} />
                            ))
                        }
                    </Row> 
                </Container>
            </section>

            {/* -------------become-driver-section----------------- */}

            <section className="becomeDriver_section" style={{marginTop:"5rem"}}>
                <BecomeDriverSection />
            </section>

            {/* ----------testimonial-section------------------ */}
            <section className="testimonial_section" style={{marginTop:"5rem"}}>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-4 text-center">
                            <h3 className="section_testimonial_subtitle mb-2">Our Clients Says</h3>
                             <h2 className="section_title mb-2">Testimonials</h2>
                        </Col>
                        <Testimonial />
                    </Row>
                </Container>
            </section>
            
            {/* -------------------blog-section------------------ */}
            <section className="blog_section" style={{marginTop:"5.5rem"}}>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5 text-center">
                            <h3 className="section_blog_subtitle mb-2">Explore or Blogs</h3>
                             <h2 className="section_title mb-2">Latest Blogs</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>

        </Helmet>
};

export default Home;
