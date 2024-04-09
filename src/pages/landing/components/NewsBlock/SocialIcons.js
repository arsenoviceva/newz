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
      <Row className="d-flex ">
        <Col xs={2} className="social-column">
          <LiaFacebookF className="social-icons-f " />
        </Col>
        <Col xs={10}>
          <p>
            {" "}
            <strong>575,5K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={2} className="social-column">
          <LiaTwitter className="social-icons-t" />
        </Col>
        <Col xs={10}>
          <p>
            {" "}
            <strong>215,5K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={2} className="social-column">
          <LiaInstagram className="social-icons-i" />
        </Col>
        <Col xs={10}>
          <p>
            {" "}
            <strong>98K </strong> Followers
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="pb-3">
        <Col xs={2} className="social-column">
          <LiaYoutube className="social-icons-y" />
        </Col>
        <Col xs={10}>
          <p>
            {" "}
            <strong>55,5K </strong> Followers
          </p>
        </Col>
      </Row>
    </Container>
  );
};
