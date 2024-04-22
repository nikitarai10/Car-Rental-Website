import React, { useEffect } from "react";
import CarData from "../data/CarData";
import { Container,Row,Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import '../assets/css/carDetails.css';


const CarDetails = ()=>{

    const {slug} = useParams();
    const singleCarItem = CarData.find((item) => item.carName === slug)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[singleCarItem]);

    return(
        <Helmet title = {singleCarItem.carName}>
        <section className="carDetails_section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <img src={singleCarItem.imgUrl} alt="img" className="w-100" />
                </Col>
                <Col lg='6' md='6' className="car_info_wrapper">
                <div className="car_info">
                    <h2 className="section_title">{singleCarItem.carName}</h2>
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <h6 className="rent_price fw-bold fs-4">
                            ${singleCarItem.price}.00 / Day
                        </h6>

                        <span className="d-flex align-items-center gap-2">
                            <span style={{color:'var(--secondary)' }}>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            <i className="ri-star-s-fill"></i>
                            </span>

                            ({singleCarItem.rating} ratings)

                        </span>
                    </div>
                    <p className="section_description">
                        {singleCarItem.description}
                    </p>

                    <div className="d-flex align-items-center" style={{columnGap:'4rem'}}>
                    
                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-roadster-line"  style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.model}
                    </span>

                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-settings-2-line"  style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.automatic}
                    </span>

                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-timer-flash-line" style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.speed}
                    </span>

                    </div>

                    <div className="d-flex align-items-center car_features_wrapper" style={{columnGap:'3rem'}}>
                    
                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-map-pin-line" style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.gps}
                    </span>

                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-wheelchair-line" style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.seatType}
                    </span>

                    <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-building-2-line" style={{color:'var(--secondary)' }}></i>
                        {singleCarItem.brand}
                    </span>

                    </div>

                </div>
                </Col>
                </Row>

                <Row className="mt-4">
                <Col lg='7' className="mt-5">
                    <div className="booking_info">
                        <h4 className="mb-4 fw-bold">Booking Information</h4>
                        <BookingForm />
                    </div>
                </Col>

                <Col lg='5' className="mt-5">
                    <div className="payment_info">
                        <h4 className="mb-4 fw-bold">Payment Information</h4>
                        <PaymentMethod />
                    </div>
                </Col>
                </Row>

        </Container>
        </section>
        </Helmet>
    )
};
export default CarDetails;