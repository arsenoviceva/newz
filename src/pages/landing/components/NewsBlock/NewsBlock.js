import { Container, Row, Col } from "react-bootstrap";
import { DifferentNews } from "./DifferentNews";
import { Miscellaneous } from "./Miscellaneous";

export const NewsBlock = () => {
  return (
    <Container>
      <Row>
        <Col lg={9} className="p-0">
          <DifferentNews />
        </Col>
        <Col lg={3} className="border-md-start p-0">
          <Miscellaneous />
        </Col>
      </Row>
    </Container>
  );
};
