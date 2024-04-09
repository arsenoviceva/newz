import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LiaCalendarAlt, LiaComment, LiaUserSolid } from "react-icons/lia";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { SmallCard } from "../SmallCard";

export const DifferentNews = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="border-md-end p-0 pe-md-2">
          <p className="text-decoration-none fs-15px">POPULAR POSTS </p>

          <Card className="mt-3 border-0 bg-white">
            <Card.Header className="title-without-corner rounded-0">
              MARKET
            </Card.Header>
            <Card.Body className="px-0">
              <Card.Title className="fs-4">
                The 6th session of the US Congress today
              </Card.Title>
              <Card.Text className="pt-3">
                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                  <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                  <LiaComment className="fs-5 ms-4" /> 55
                </div>
              </Card.Text>
              <Card.Img
                className="rounded-0"
                variant="top"
                src="/images/news.jpg"
              />
            </Card.Body>
          </Card>
          <hr />
          <Card className="mt-3 border-0 bg-white">
            <Card.Header className="title-without-corner rounded-0">
              MARKET
            </Card.Header>
            <Card.Body className="px-0">
              <Card.Title className="fs-4">
                The 6th session of the US Congress today
              </Card.Title>
              <Card.Text className="pt-3">
                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                  <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                  <LiaComment className="fs-5 ms-4" /> 55
                </div>
              </Card.Text>
              <Card.Img
                className="rounded-0"
                variant="top"
                src="/images/news.jpg"
              />
            </Card.Body>
          </Card>
          <hr />
          <Card className="mt-3 border-0 bg-white pb-0">
            <Card.Header className="title-without-corner rounded-0">
              MARKET
            </Card.Header>
            <Card.Body className="px-0">
              <Card.Title className="fs-4">
                The 6th session of the US Congress today
              </Card.Title>
              <Card.Text className="pt-3">
                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                  <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                  <LiaComment className="fs-5 ms-4" /> 55
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <hr />
          <Card className="mt-3 border-0 bg-info p-3">
            <Card.Header className="rounded-0 border-0 fw-bold bg-info m-0 p-0">
              SPONSORED
            </Card.Header>
            <Card.Body className="px-0">
              <Card.Title className="fs-4">
                Sixsense Resort 5 stars just $1,299
              </Card.Title>
              <Card.Text className="pt-3">
                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                  <a href="/" className="text-decoration-none fs-15x">
                    {" "}
                    traveloka.com <LuArrowUpRightSquare />
                  </a>
                </div>
              </Card.Text>
              <Card.Img
                className="rounded-0"
                variant="top"
                src="/images/travel.jpg"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className=" my-4 my-md-0 p-0 ps-md-2">
          <p className="text-decoration-none fs-15px">RECENT POSTS </p>
          <SmallCard
            details
            badgeTitle={"NEWS"}
            coloredTitle={"title-without-corner rounded-0"}
            cardTitleColor="fs-5 text-black"
            backgroundColor="bg-white"
            cardTitle={"The transportaion market shows signs of revival"}
          />
          <hr />
          <SmallCard
            details
            badgeTitle={"NEWS"}
            coloredTitle={"title-without-corner rounded-0"}
            cardTitleColor="fs-5 text-black"
            backgroundColor="bg-white"
            cardTitle={"Norway exempts visas for visitors from EU"}
          />
          <hr />
          <SmallCard
            details
            badgeTitle={"TECHNOLOGY"}
            coloredTitle={"title-without-corner rounded-0"}
            cardTitleColor="fs-5 text-black"
            backgroundColor="bg-white"
            cardTitle={"Norway exempts visas for visitors from EU"}
          />
          <hr />
          <div id="different-news">
            <Card>
              <Card.Img src="/images/smallcard2.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Header className="title-without-corner rounded-0">
                  BUSINESS
                </Card.Header>
                <Card.Title className="text-white fs-2">
                  2022 NFL Craf predict: Sample Quarterbacks
                </Card.Title>
                <div className="position my-4 me-5 d-flex  align-items-center gap-2 text-white">
                  <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                  <LiaUserSolid className="fs-5 ms-4" /> By{" "}
                  <strong>Admin</strong>
                  <LiaComment className="fs-5 ms-4" /> 55 comments
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <hr />
          <SmallCard
            details
            badgeTitle={"MARKET"}
            coloredTitle={"title-without-corner rounded-0"}
            cardTitleColor="fs-5 text-black"
            backgroundColor="bg-white"
            cardTitle={"Norway exempts visas for visitors from EU"}
          />
          <hr />
          <SmallCard
            details
            badgeTitle={"POLITICS"}
            coloredTitle={"title-without-corner rounded-0"}
            cardTitleColor="fs-5 text-black"
            backgroundColor="bg-white"
            cardTitle={"Norway exempts visas for visitors from EU"}
          />
        </Col>
      </Row>
    </Container>
  );
};
