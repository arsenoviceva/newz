import { Container, Row, Col } from "react-bootstrap";
import {
  LiaFacebookF,
  LiaTwitter,
  LiaInstagram,
  LiaYoutube,
} from "react-icons/lia";

export const SocialIcons = () => {
  return (
    <Container className="border pt-3 my-3">
      <Row className="align-items-center justify-content-center">
        <Col xs={2} className=" d-flex justify-content-center social-column">
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            <LiaFacebookF className="social-icons-f " />
          </a>
        </Col>
        <Col xs={10}>
          <p className="pt-3">
            {" "}
            <strong>575,5K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="align-items-center justify-content-center">
        <Col xs={2} className="d-flex justify-content-center social-column">
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            <LiaTwitter className="social-icons-t" />
          </a>
        </Col>
        <Col xs={10}>
          <p className="pt-3">
            {" "}
            <strong>215,5K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="align-items-center justify-content-center">
        <Col xs={2} className="d-flex justify-content-center social-column">
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            <LiaInstagram className="social-icons-i" />
          </a>
        </Col>
        <Col xs={10}>
          <p className="pt-3">
            {" "}
            <strong>98K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="pb-3 align-items-center justify-content-center">
        <Col xs={2} className="d-flex justify-content-center social-column">
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            <LiaYoutube className="social-icons-y" />
          </a>
        </Col>
        <Col xs={10}>
          <p className="pt-3">
            {" "}
            <strong>55,5K </strong> Followers
          </p>
        </Col>
      </Row>
    </Container>
  );
};
