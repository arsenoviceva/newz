import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BsLightningChargeFill } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

const news = [
  { id: 1, title: "The biggest takeaways from the first Jan. 6 hearing" },
  { id: 2, title: "Biden asks Congress for $33 bilion to support Ukraine" },
  { id: 3, title: "Putin preparing to starve parts of developing world" },
  { id: 4, title: "The 6th session of the US Congress today" },
];

export const BreakingNewsSlider = () => {
  const carouselLength = news.length;

  const [index, setIndex] = useState(1);

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

  return (
    <Container className="bg-white py-5">
      <Row>
        <Col md={12}>
          <Row className="d-flex bg-secondary">
            <div className="col-lg-2 d-flex align-items-center justify-content-center gap-2 px-0">
              <div className="title-without-corner w-100 h-100">
                <BsLightningChargeFill className="text-white mx-1" />
                <h5 className="text-white ">Breaking News</h5>
              </div>
            </div>
            <div className="col-lg-9 d-flex align-items-center justify-content-center gap-3 py-2 px-5">
              <h6 className="m-0 text-black text-decoration-underline">
                {news[0].title}
              </h6>
              <span className="text-muted"> {"\u2022"} </span>
              <h6 className="m-0 text-black">{news[index].title}</h6>
            </div>
            <div className="col-lg-1 d-flex align-items-center justify-content-end gap-1">
              <SlArrowLeft
                className="bg-white fs-3 text-muted"
                onClick={onBackClick}
              />
              <SlArrowRight
                className="bg-white fs-3 text-muted"
                onClick={onNextClick}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
