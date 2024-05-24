import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { SmallCard } from "../SmallCard";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { LiaCalendarAlt, LiaComment, LiaUserSolid } from "react-icons/lia";
import { useState } from "react";

const carouselItems = [
  {
    id: 1,
    title: "Forbes #3: Top 10 Businessman NYC",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/smallcard2.jpg",
  },
  {
    id: 2,
    title: "Forbes #3: Top 10 Businessman MIAMI",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/news.jpg",
  },
  {
    id: 3,
    title: "Forbes #3: Top 10 Businessman LAS VEGAS",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/smallcard.jpg",
  },
  {
    id: 4,
    title: "Forbes #3: Top 10 Businessman TEXAS",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/travel.jpg",
  },
];

export const TopVideosBlock = () => {
  const carouselLength = carouselItems.length;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onBackClick = () => {
    if (index === 0) {
      setIndex(carouselLength - 1);
      return;
    }
    setIndex(index - 1);
  };

  const onNextClick = () => {
    if (index === carouselLength - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  console.log(index, "index");

  return (
    <div className="bg-primary">
      <Container className="my-5 ">
        <Row className="py-5 gap-4">
          <Col md={12}>
            <p className="text-decoration-none fs-20px text-white">
              TOP VIDEOS LAST WEEK{" "}
            </p>
          </Col>
          <Col lg={7} className=" p-0">
            <div id="top-videos-carousel">
              <div className="position-title title-without-corner">
                BUSINESS
              </div>
              <SlArrowLeft
                onClick={onBackClick}
                className="left bg-white fs-2 text-muted border border-secondary p-1 cursor-pointer"
              />
              <SlArrowRight
                onClick={onNextClick}
                className="right bg-white fs-2 text-muted border border-secondary p-1 cursor-pointer"
              />

              <Carousel
                className="w-100"
                indicators={false}
                controls={false}
                activeIndex={index}
              >
                {carouselItems?.map((item) => {
                  return (
                    <Carousel.Item key={item.id}>
                      <img
                        className="d-block w-100 h-100"
                        src={item.image}
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <a
                          href="https://www.google.co.uk/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-reset"
                        >
                          <h3>{item.title}</h3>
                        </a>
                        <p>{item.description}</p>
                        <LiaCalendarAlt className="fs-20px" /> Dec 14, 2022
                        <LiaUserSolid className="fs-20px ms-4" /> By Admin
                        <LiaComment className="fs-20px ms-4" /> 55 comments
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </Col>
          <Col lg={4} className="border-md-start p-0 ps-md-4">
            <p className="text-decoration-none fs-20px text-white">
              VIDEOS UP NEXT{" "}
            </p>
            <SmallCard
              badgeTitle={"NEWS"}
              coloredTitle={"title-without-corner-white rounded-0"}
              cardTitle={"Strategy marketing of Fedex Inc"}
              cardTitleColor="fs-5 text-white text-decoration-underline"
              backgroundColor="bg-primary"
            />
            <hr className="line-color" />
            <SmallCard
              badgeTitle={"BUSINESS"}
              coloredTitle={"title-without-corner-white rounded-0"}
              cardTitle={"Art of Marketing"}
              cardTitleColor="fs-5 text-white"
              backgroundColor="bg-primary"
            />
            <hr className="line-color" />
            <SmallCard
              badgeTitle={"VIDEOS"}
              coloredTitle={"title-without-corner-white rounded-0"}
              cardTitle={"Google officially acquired Yahoo today"}
              cardTitleColor="fs-5 text-white"
              backgroundColor="bg-primary"
            />
            <hr className="line-color" />
            <SmallCard
              badgeTitle={"MARKET"}
              coloredTitle={"title-without-corner-white rounded-0"}
              cardTitle={"Creative with service delivery in India"}
              cardTitleColor="fs-5 text-white"
              backgroundColor="bg-primary"
            />
            <hr className="line-color" />
            <a href="/" className="text-decoration-none fs-20px text-white">
              See all posts <SlArrowRight className="fs-10px" />{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
