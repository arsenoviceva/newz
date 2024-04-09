import { Container, Row, Col } from "react-bootstrap";

import { LatestNews } from "../LatestNews";
import { TrendingPosts } from "../TrendingPosts";

export const SmallNewsBlock = () => {
  return (
    <Container>
      <Row>
        <Col md={9} className="ps-md-0 p-0">
          <LatestNews />
        </Col>
        <Col md={3} className="border-md-start p-0">
          <TrendingPosts />
        </Col>
      </Row>
    </Container>
  );
};
