import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { Col, Row } from 'react-bootstrap';





export const NavbarCollapse = () => {
    return (
        <>
            <Container className="fs-5 p-0 bg-white mx-auto">
                <Row>
                    <Col md={12} >
                        <Navbar collapseOnSelect expand="lg" className="bg-white " id="navbar-typography" >

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto fw-bold gap-2">
                                    <NavDropdown title="Demo" id="collapsible-nav-dropdown" active>
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Features" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                                    </NavDropdown>
                                    <NavDropdown title="Shop" id="collapsible-nav-dropdown">

                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#features" className='position-relative'>News

                                        <Badge className="top-right-badge fs-10px" >
                                            HOT
                                        </Badge>
                                    </Nav.Link>
                                    <Nav.Link href="#pricing">Tech</Nav.Link>
                                    <Nav.Link href="#features">Business</Nav.Link>
                                    <Nav.Link href="#pricing">Politics</Nav.Link>
                                    <Nav.Link href="#features">Market</Nav.Link>

                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets"><FaTwitter /></Nav.Link>
                                    <Nav.Link href="#memes"><FaFacebookF /></Nav.Link>
                                    <Nav.Link href="#memes"><FaInstagram /></Nav.Link>
                                    <Nav.Link href="#memes"><SlSocialYoutube /></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar >
                    </Col>
                </Row>
            </Container>
        </>
    );
}

