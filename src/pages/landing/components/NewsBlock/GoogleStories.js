import { Container, Row, Col } from "react-bootstrap";

export const GoogleStories = ({ borderColor, title }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={4} md={6}>
          <img
            className={borderColor}
            src="/images/story.jpg"
            alt="google story"
          />
        </Col>
        <Col xs={8} md={6} className="fs-15px fw-bold">
          {title}
        </Col>
      </Row>
    </Container>
  );
};
