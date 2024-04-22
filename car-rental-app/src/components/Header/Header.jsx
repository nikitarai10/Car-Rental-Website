import React,{useRef} from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/header.css";

const navlinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/cars',
    display:'Cars'
  },
  {
    path:'/blogs',
    display:'Blogs'
  },
  {
    path:'/contact',
    display:'Contact'
  },

]

const Header = () => {

  const menuRef = useRef(null)

  const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active')

  return (
    <header className="header">
      <div className="header_top">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i className="ri-phone-fill"></i> +977980345678
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>
                  Login
                </Link>

                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i>
                  Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------header middle section--------------- */}
      <div className="header_middle my-3">
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="4" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="4" md="4" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" sm="4" className="d-flex align-items-center justify-content-end">
              <button className="header_btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Get In Touch
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --------------Main navigation-------------------- */}

         <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {
                  navlinks.map((item,index)=>(
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "nav_active nav_item" : "nav_item"} key={index}> {item.display} </NavLink>
                  ))
                }
              </div>
            </div>

            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line" title="Search"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
export default Header;
