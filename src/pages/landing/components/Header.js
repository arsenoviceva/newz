import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaCloudSunSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";

import { Badge } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LiaTwitter } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaYoutube } from "react-icons/lia";
import { SubscribeModal } from "./SubscribeModal";

import {
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Header = () => {
  const [openInput, setOpenInput] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = () => {
    setOpenInput(!openInput);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <Container className="bg-white py-3">
      <Row className="align-items-lg-center ">
        <div className="col-auto d-lg-none">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-white"
            id="navbar-typography"
          >
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
                <Nav.Link href="#features" className="position-relative">
                  News
                  <Badge className="top-right-badge fs-10px">HOT</Badge>
                </Nav.Link>
                <Nav.Link href="#pricing">Tech</Nav.Link>
                <Nav.Link href="#features">Business</Nav.Link>
                <Nav.Link href="#pricing">Politics</Nav.Link>
                <Nav.Link href="#features">Market</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <LiaTwitter />
                </Nav.Link>
                <Nav.Link href="#memes">
                  <LiaFacebookF />
                </Nav.Link>
                <Nav.Link href="#memes">
                  <LiaInstagram />
                </Nav.Link>
                <Nav.Link href="#memes">
                  <LiaYoutube />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="col-lg-8 col p-0">
          <div className="row d-flex  align-items-center">
            <div className="col-lg-4 p-0 col-12 col-md-auto">
              <img
                className="img-fluid m-o p-0"
                src="/images/news-logo-2.png"
                alt="logo"
              />
            </div>
            <div className="col-6 col-md-auto col-lg-4 d-flex">
              <LiaCalendarAlt className="fs-2" />
              <ul className="list-unstyled m-0">
                <li>
                  <h6 className="fw-bold text-black"> Monday</h6>
                  <h6 className="text-muted"> Nov 25, 2023</h6>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-auto col-lg-4 d-flex">
              <LiaCloudSunSolid className="fs-2" />
              <ul className="list-unstyled m-0">
                <li>
                  <h6 className="fw-bold text-black">
                    {" "}
                    32<sup>o</sup>C, Cloudy
                  </h6>
                  <h6 className="text-muted"> New York</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 my-2 p-0 text-center d-none d-md-flex">
          <div className="row d-flex align-items-center">
            <div className="col-4 p-0">
              <div
                className="d-flex align-items-center cursor-pointer gap-1"
                onClick={openModalHandler}
              >
                <LiaEnvelopeSolid className="fs-3" />
                <p className="text-muted p-0 m-0"> SUBSCRIBE</p>
              </div>
              <hr className="opacity-100 m-0" />
            </div>

            <div className="col-2">
              <LiaUserSolid className="fs-2" />
            </div>
            <div className="col-2 d-flex border-end border-dark">
              <div className="position-relative">
                <LiaShoppingBagSolid className="fs-2" />
                <div className="top-right-icon" />
              </div>
            </div>

            <div className="col-4">
              <LiaSearchSolid className="fs-2 ms-3" onClick={clickHandler} />
            </div>
          </div>
          {openInput === true ? (
            <div className="row my-2">
              <input
                type="text"
                className="form-input border w-100"
                placeholder="search"
              />
            </div>
          ) : null}
        </div>
      </Row>
      <SubscribeModal open={openModal} close={closeModalHandler} />
    </Container>
  );
};
