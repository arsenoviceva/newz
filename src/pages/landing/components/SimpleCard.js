import Card from "react-bootstrap/Card";

export const SimpleCard = ({ badgeTitle }) => {
  return (
    <Card id="simple-card">
      <Card.Img src="/images/smallcard2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Header className="title-without-corner rounded-0">
          {badgeTitle}
        </Card.Header>
        <Card.Title className="text-white">
          {" "}
          <a
            href="https://www.google.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-reset"
          >
            {" "}
            Real Estate in California
          </a>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};
