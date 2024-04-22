import React, { useState } from 'react';
import '../../assets/css/bookingForm.css';
import { Form , FormGroup } from 'reactstrap';

const BookingForm = () => {
    
    const submitHandler = event=>{
        event.preventDefault();
    }

    const [personSelected ,setPersonSelected]  = useState("");
    const [personShowClicked , setPersonShowClicked] = useState(false)

    const [luggageSelected ,setLuggageSelected]  = useState();
    const [luggageShowClicked , setLuggageShowClicked] = useState(false)

    const displayPersonList = ()=>{
        setPersonShowClicked(!personShowClicked);
    }

    const selectPersonNumber = (e)=> {
        const personNumSelected = e.target.textContent;
        setPersonSelected(personNumSelected);
        setPersonShowClicked(!personShowClicked);
    }

    const displayLuggageList = ()=>{
        setLuggageShowClicked(!luggageShowClicked);
    }

    const selectLuggageNumber = (e)=> {
        const luggageNumSelected = e.target.textContent;
        setLuggageSelected(luggageNumSelected);
        setLuggageShowClicked(!luggageShowClicked);
    }


  return <Form onSubmit={submitHandler}>
    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="text" placeholder='First Name' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="text" placeholder='Last Name' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="email" placeholder='Email' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="number" placeholder='Phone Number' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="text" placeholder='From Address' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="text" placeholder='To Address' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
    <div className="person_list_wrapper">
    <div className="person_input_placeholder d-flex align-items-center justify-content-between"  onClick={displayPersonList}>
        <input type="text" value={personSelected} placeholder='How many people' readOnly />
        <i className={"ri-arrow-down-s-line" + ( personShowClicked ? " rotate" : " reverse_rotate ") }></i>
        </div>

        {
            personShowClicked && (
            <ul className='list-unstyled mb-0 person_list'>
            <li onClick={selectPersonNumber}>1 person</li>
            <li onClick={selectPersonNumber}>2 people</li>
            <li onClick={selectPersonNumber}>3 people</li>
            <li onClick={selectPersonNumber}>4 people</li>
            <li onClick={selectPersonNumber}>5 people</li>

            </ul>)
        }


    </div>
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
    <div className="luggage_list_wrapper">
    <div className="luggage_input_placeholder d-flex align-items-center justify-content-between" onClick={displayLuggageList}>
        <input type="text" value={luggageSelected} placeholder='How many luggages' readOnly />
        <i className={"ri-arrow-down-s-line" + ( luggageShowClicked ? " rotate" : " reverse_rotate ") }></i>
        </div>

        {
            luggageShowClicked && (
            <ul className='list-unstyled mb-0 luggage_list'>
            <li onClick={selectLuggageNumber}>1 luggage</li>
            <li onClick={selectLuggageNumber}>2 luggages</li>
            <li onClick={selectLuggageNumber}>3 luggages</li>
            <li onClick={selectLuggageNumber}>4 luggages</li>
            <li onClick={selectLuggageNumber}>5 luggages</li>
        </ul>
            )
        }

    </div>
    </FormGroup>

    <FormGroup className="booking_form d-inline-block mb-4 me-2">
        <input type="date" placeholder='Journey Date' />
    </FormGroup>

    <FormGroup className="booking_form d-inline-block me-2 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time_picker"
        />
      </FormGroup>

    <FormGroup className="booking_form">
    <textarea rows={5} type='textarea' className='textarea' placeholder='Place your comment...' ></textarea>
    </FormGroup>

    

  </Form>
};

export default BookingForm;