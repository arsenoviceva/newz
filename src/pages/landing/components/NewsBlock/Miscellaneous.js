import { Container, Row, Col } from "react-bootstrap";
import { SocialIcons } from "./SocialIcons";
import { Tags } from "./Tags";
import Card from "react-bootstrap/Card";
import { GoogleStories } from "./GoogleStories";

export const Miscellaneous = () => {
  return (
    <Container>
      <Row>
        <Col lg={12} className="p-0">
          <p className="text-decoration-none fs-15px">STAY CONNECTED </p>
        </Col>

        <Col md={6} lg={12} className="px-md-3 p-0">
          <SocialIcons />
          <hr className="my-4" />
        </Col>
        <Col md={6} lg={12}>
          <p className="text-decoration-none fs-15px">HOT TAGS TODAY </p>
          <Tags />
          <hr className="my-4" />
        </Col>

        <Col sm={6} lg={12}>
          <Card>
            <Card.Img src="/images/square-banner.png" alt="Card image" />
            <Card.ImgOverlay>
              <button className="border-0 bg-white text-black px-3 py-1 fw-bold">
                Learn more
              </button>
            </Card.ImgOverlay>
          </Card>
          <hr className="my-4" />
        </Col>
        <Col sm={6} lg={12}>
          <p className="text-decoration-none fs-15px">GOOGLE WEB STORIES </p>
          <GoogleStories
            borderColor={"google-story-img-d"}
            title={"Kayak Stories"}
          />
          <hr />
          <GoogleStories
            borderColor={"google-story-img"}
            title={"6 Tips Successful for Developers"}
          />
          <hr />
          <GoogleStories
            borderColor={"google-story-img-d"}
            title={"PS Controller"}
          />
        </Col>
      </Row>
    </Container>
  );
};
