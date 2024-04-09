import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";

export const SmallCard = ({
  details,
  cardTitleColor,
  cardTitle,
  coloredTitle,
  badgeTitle,
  backgroundColor,
}) => {
  return (
    <Row>
      <Col md={8} className="p-0 ">
        <Card className={backgroundColor}>
          <Card.Header className={coloredTitle}>{badgeTitle}</Card.Header>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Card.Title className={cardTitleColor}>{cardTitle}</Card.Title>
          </Card.Body>
          {details && (
            <div className="my-4 me-5 d-flex  align-items-center gap-2">
              <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
              <LiaComment className="fs-5 ms-4" /> 55 Comments
            </div>
          )}
        </Card>
      </Col>
      <Col md={4} className="p-0 mb-md-0 mb-2">
        <img src="/images/smallcard.jpg" className="w-100" alt="card-pic" />
      </Col>
    </Row>
  );
};
