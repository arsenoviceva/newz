import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";
import { Badge } from "react-bootstrap";

export const MediumCard = ({ isLive, badgeTitle, title }) => {
  return (
    <Card className="mt-3 border-0 bg-white">
      <div className="d-flex gap-2">
        {isLive && (
          <Badge className="rounded-0 d-flex align-items-center " bg="danger">
            <span className="text-white p-0 "> {"\u2022"} </span>LIVE
          </Badge>
        )}
        <Card.Header className="title-without-corner rounded-0">
          {badgeTitle}
        </Card.Header>
      </div>
      <Card.Body className="px-0">
        <Card.Title className="fs-3">
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            {title}
          </a>
        </Card.Title>
        <Card.Text className="pt-3">
          <div className="my-4 me-5 d-flex  align-items-center gap-2">
            <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
            <LiaComment className="fs-5 ms-4" /> 55 comments
          </div>
        </Card.Text>
        <Card.Img className="rounded-0" variant="top" src="/images/news.jpg" />
      </Card.Body>
    </Card>
  );
};
