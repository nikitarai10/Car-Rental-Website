import React, { useState , useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import '../assets/css/carListing.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem'; 
import CarData from '../data/CarData';

const CarListing = ()=>{

    const [carRangeShowClicked,setCarRangeShowClicked] = useState(false);
    const [carRangeSelected, setCarRangeSelected] = useState('');
    const [sortedCarData, setSortedCarData] = useState([...CarData]);

    const displayCarRangeList = () => {
        setCarRangeShowClicked(!carRangeShowClicked);
    }

    const carRangeSelectedFunc = (e) => {
        const carRange = e.target.textContent.trim();
        setCarRangeSelected(carRange);

        let sortedCarData;
        if (carRange === "Low to High") {
            sortedCarData =  [...CarData].sort((a,b)=> a.price - b.price);
        } else if (carRange === "High to Low") {
             sortedCarData =  [...CarData].sort((a,b)=> a.price - b.price).reverse();
        }

        setSortedCarData(sortedCarData);
        setCarRangeShowClicked(!carRangeShowClicked);
        
    }

    return(
        <Helmet title='Cars'>
        <CommonSection title= "Car Listing" />
        <section className="carListing_section">
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="d-flex align-items-center gap-3 mb-5 car_range">
                       <span className="d-flex align-items-center gap-2">
                            <i className="ri-sort-asc"></i>
                            Sort By
                        </span>

                        <div className="car_range_wrapper position-relative">
                        <span className="car_range_input_wrapper" onClick={displayCarRangeList}>
                        <input value={carRangeSelected} type="text" placeholder="Select Car range" readOnly className="car_range_input_field" />
                        <i className="ri-arrow-down-s-line"></i>
                        </span>
                       {
                        carRangeShowClicked && (
                            <ul className="list-unstyled mb-0 car_range_list">
                            <li onClick={carRangeSelectedFunc}> Low to High </li>
                            <li onClick={carRangeSelectedFunc}> High to Low </li>
                        </ul>
                        )
                       }
                        </div>

                        </div>
                    </Col>

                    {
                        sortedCarData.map(item=>(
                            <CarItem item = {item} key={item.id} />
                        ))
                    }
                </Row>
            </Container>
        </section>
        </Helmet>
    )
};
export default CarListing;

