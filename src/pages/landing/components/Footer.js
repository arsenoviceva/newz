import { Container, Row, Col } from 'react-bootstrap';
import { LiaHomeSolid } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaYoutube } from "react-icons/lia";
import { LuArrowRight } from "react-icons/lu";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
 




export const Footer = () => {
    return (
        <div className="bg-primary">
            <Container className="my-5 ">
                <Row className="d-flex py-5">
                    <Col md={5} className="p-0">
                        <h5 className="footer-title"> Newz - Business Magazine </h5>
                        <Row>
                            <Col md={1} className="p-0">
                                <LiaHomeSolid  className="text-white fs-5" />
                            </Col>
                            <Col md={11}>
                                <p className="text-white"> 223 Orhard St, Manhattan, NY 9032 </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="p-0">
                                <LiaPhoneSolid className="text-white fs-5" />
                            </Col>
                            <Col md={11}>
                                <p className="text-white"> +031 5689 89 98 </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="p-0">
                                <LiaEnvelopeSolid className="text-white fs-5"  />
                            </Col>
                            <Col md={11}>
                                <p className="text-white"> technology@newz.com </p>
                            </Col>
                        </Row>
                        <Col md={12} className="ps-0 py-5">
                            <LiaTwitter className="social-footer-white"/>
                            <LiaFacebookF className="social-footer"/>
                            <LiaInstagram className="social-footer"/>
                            <LiaYoutube className="social-footer"/>
                        </Col>
                    </Col>
                    <Col md={2}>
                    <h5 className="footer-title"> Topics</h5>
                    <ul className="list-unstyled text-white">
                        <li className="text-decoration-underline pb-2"> News</li>
                        <li className="pb-2"> Business</li>
                        <li className="pb-2"> Tech</li>
                        <li className="pb-2"> Politics</li>
                        <li className="pb-2"> Economy</li>
                        <li className="pb-2"> Market</li>
                        <li className="pb-2"> Video</li>
                    </ul>

                    </Col>
                    <Col md={2}>
                    <h5 className="footer-title"> Help</h5>
                    <ul className="list-unstyled text-white">
                        <li className="pb-2"> About</li>
                        <li className="pb-2"> Contact</li>
                        <li className="pb-2"> Advertise</li>
                        <li className="pb-2"> Career</li>
                        <li className="pb-2"> Policy</li>
                        <li className="pb-2"> FAQ</li>


                    </ul>

                    </Col>
                    <Col md={3}>
                    <h5 className="footer-title "> Newsletter</h5>

                        <p className="text-white"> Register now to get latest updates on promotions and coupons. </p>
                        <Form inline >
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1" className="form"><LiaEnvelopeSolid className="text-white fs-3"/></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter your email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    className="form"
                                />
                                <LuArrowRight className="text-primary fs-2 bg-white rounded-5 position-absolute end-0 " />
                            </InputGroup>
                        </Form>
                        
                        <span className="text-secondary fst-italic"> By subscribing, you accepted our </span> <span  className="text-decoration-underline fw-bold text-white"> Policy</span>

                    </Col>
                    <Col md={12} className="p-0 my-4">
                        <img src="images/news-logo-2.png" className="me-5"/>
                        <span className="text-secondary">2022 Copyrights by </span> <span className="text-white"> <strong>Newz</strong> All rights reserved.</span>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}