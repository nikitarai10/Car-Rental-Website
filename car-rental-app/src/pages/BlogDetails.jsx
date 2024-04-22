import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";

import BlogData from "../data/BlogData";
import Helmet from "../components/Helmet/Helmet";
import commentImg from '../assets/images/ava-1.jpg';
import '../assets/css/blogDetails.css';


const BlogDetails = () =>{

    const { slug } = useParams();
    const blog = BlogData.find(blog => blog.title === slug);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [slug]);
  
    return <Helmet title={blog.title}>
    <section className="my-5 pt-2 blog_details_section">
    <Container>
        <Row>
            <Col lg='8' md='8'>
            <div className="blog_details">
                <img src={blog.imgUrl} alt="blog-img" className="w-100" />
                <h3 className="section_title mt-3"> {blog.title} </h3>

                <div className="blog_publisher d-flex align-items-center gap-4 mb-3">
                <span className="blog_author">
                        <i className="ri-user-line"></i>
                        {blog.author}
                    </span>

                        <span className="d-flex align-items-center gap-1 section_description">
                            <i className="ri-calender-line"></i>
                            {blog.date}
                        </span>

                        <span className="d-flex align-items-center gap-1 section_description">
                            <i className="ri-calender-line"></i>
                            {blog.time}
                        </span>
                </div>

                <p className="section_description">
                    {blog.description}
                </p>
                
                <h6 className="fw-normal text-center py-2">
                    <blockquote className="fs-5"> {blog.quote} </blockquote>
                </h6>
                <p className="section_description">
                    {blog.description}
                </p>
            </div>

            <div className="comment_list mt-5">
                <h4 className="mb-4">3 Comments</h4>

                <div className="single_comment d-flex gap-3">
                    <img src={commentImg} alt="comment" />
                    
                <div className="comment_content">
                    <h6 className="fw-bold">David Visa</h6>
                    <span className="section_description mb-0">14 July, 2022</span>
                    <p className="section_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla accusantium molestiae unde nesciunt. Earum repudiandae eveniet non hic ex. Nemo obcaecati incidunt consectetur iste unde, tempora totam ex odit.
                    </p>
                    <span className="replay d-flex align-items-center gap-1">
                <i className="ri-reply-line"></i> Replay
                </span>
                </div>
                </div>

                {/* -------------------comment-section---------------- */}

                <div className="leave_comment_form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section_description mt-1">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="form_email_name_holder">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="blog_comment_btn mt-1">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4" className="recent_post_wrapper">
              <div className="recent_post mb-4">
                <h4 className="fw-bold" style={{color:"var(--primary)"}}>Recent Posts</h4>
              </div>
              {BlogData.map((item) => (
                <div className="recent_blog_post mb-4" key={item.id}>
                  <div className="recent_blog_item d-flex gap-3">
                    <img src={item.imgUrl} className="w-25 rounded-1" />
                    <div className="recent_blog_links">
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                      </h6>
                      <span>
                        <Link to={`/blogs/${item.title}`}> {item.description.length > 68 ? item.description.substring(1,68) : item.description} </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
        </Row>
    </Container>
    </section>
    </Helmet>
};
export default BlogDetails;