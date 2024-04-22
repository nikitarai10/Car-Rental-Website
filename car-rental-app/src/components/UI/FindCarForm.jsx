import React, { useRef, useState } from "react";
import { Form,FormGroup } from "reactstrap";

import '../../assets/css/findCarForm.css';

const FindCarForm = () =>{

    const [carSelected, setCarSelected] = useState('');
    const [showCarList, setShowCarList] = useState(false);


    const toggleList = () =>{
        setShowCarList(!showCarList)
    }

    const changeInput = (e) => {
        setCarSelected(e.target.textContent);
        setShowCarList(!showCarList)
      };

    return(
        <Form className="form">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <FormGroup className="form_group">
                    <input type="text" placeholder="From address" required />
                </FormGroup>

                <FormGroup className="form_group">
                    <input type="text" placeholder="To address" required />
                </FormGroup>

                <FormGroup className="form_group">
                    <input type="date" placeholder="Journey date" required />
                </FormGroup>

                <FormGroup className="form_group">
                    <input type="time" className="journey_time" placeholder="Journey time" required />
                </FormGroup>

                <FormGroup className="car_list_group">
                <div className="input_field_car d-flex" onClick={toggleList}>
                    <input type="text" readOnly value={carSelected} className="input_car" placeholder="Select Car" />
                    <i className="ri-arrow-down-s-line"></i>
                </div>

                {showCarList && (
                    <ul className="list-unstyled car_list">
                    <li  onClick={changeInput}>AC Car</li>
                    <li  onClick={changeInput}>Non AC Car</li>
                </ul>
                )}

                </FormGroup>

                <FormGroup className="form_group">
                    <button className="find_car_btn">Find Car</button>
                </FormGroup>
            </div>
        </Form>
    )


}

export default FindCarForm;