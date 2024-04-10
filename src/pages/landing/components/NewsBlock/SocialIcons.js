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
        <Col xs={2} className="d-flex justify-content-center social-column">
          <LiaFacebookF className="social-icons-f " />
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
          <LiaTwitter className="social-icons-t" />
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
          <LiaInstagram className="social-icons-i" />
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
          <LiaYoutube className="social-icons-y" />
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
