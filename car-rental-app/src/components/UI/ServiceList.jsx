import React from 'react';
import { Col } from 'reactstrap';
import '../../assets/css/serviceList.css';
import serviceData from '../../data/ServiceData';

const ServiceList = () => {
  return (
    <>
        {
            serviceData.map(item=>(
                <ServiceItem item={item} key={item.id} />
            ))
        }
    </>
  );
};

const ServiceItem = ({item}) =>(
    <Col lg='4' md='4' sm='6' className='mb-4 service_item'>
        <div className="service_item">
            <span className='mb-2 d-inline-block'>
                <i className={item.icon}></i>
            </span>
            <h6>{item.title}</h6>
            <p className="section_description mt-1"> {item.desc} </p>
        </div>
    </Col>
)

export default ServiceList;