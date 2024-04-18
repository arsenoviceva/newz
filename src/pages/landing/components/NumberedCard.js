import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export const NumberedCard = ({ badgeTitle, number }) => {
  return (
    <>
      <Row className=" justify-content-center align-items-center my-4">
        <Col xs={2} className="border-end">
          <p className="fs-2 text-muted p-0"> {number}</p>
        </Col>
        <Col xs={10} className="pe-0">
          <Card>
            <Card.Header className="title-without-corner rounded-0">
              {badgeTitle}
            </Card.Header>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title className="fs-5">
                <a
                  href="https://www.google.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  US Stock Market today
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </>
  );
};
