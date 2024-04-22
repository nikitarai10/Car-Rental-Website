import React from 'react';
import SLider from 'react-slick';

import '../../assets/css/testimonials.css';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <SLider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat reiciendis! Ipsum sint nam repellendus voluptatum labore. Quia, praesentium dolorem, autem qui ipsa, voluptatem at corporis deleniti nostrum unde aliquid.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="ava-img" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">
                        John Doe
                    </h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat reiciendis! Ipsum sint nam repellendus voluptatum labore. Quia, praesentium dolorem, autem qui ipsa, voluptatem at corporis deleniti nostrum unde aliquid.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="ava-img" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">
                        Ava Max
                    </h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat reiciendis! Ipsum sint nam repellendus voluptatum labore. Quia, praesentium dolorem, autem qui ipsa, voluptatem at corporis deleniti nostrum unde aliquid.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="ava-img" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">
                        Rick Aim
                    </h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat reiciendis! Ipsum sint nam repellendus voluptatum labore. Quia, praesentium dolorem, autem qui ipsa, voluptatem at corporis deleniti nostrum unde aliquid.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="ava-img" className='w-25 h-25 rounded-2' />

                <div>
                    <h6 className="mb-0 mt-3">
                        Sora Pip
                    </h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

    </SLider>
  );
};

export default Testimonial;