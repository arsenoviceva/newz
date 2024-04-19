import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LiaTwitter } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaYoutube } from "react-icons/lia";
import { Col, Row } from "react-bootstrap";

export const NavbarCollapse = () => {
  return (
    <>
      <Container className="fs-5 p-0 bg-white mx-auto d-none d-lg-block">
        <Row>
          <Col md={12}>
            <Navbar
              collapseOnSelect
              expand="lg"
              className="bg-white "
              id="navbar-typography"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto fw-bold gap-2">
                  <NavDropdown
                    title="Demo"
                    id="collapsible-nav-dropdown"
                    active
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Features" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};
