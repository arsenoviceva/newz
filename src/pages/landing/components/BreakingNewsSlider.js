import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BsLightningChargeFill } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const BreakingNewsSlider = () => {
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
                {" "}
                The biggest takeaways from the first Jan. 6 hearing
              </h6>
              <span className="text-muted"> {"\u2022"} </span>
              <h6 className="m-0 text-black">
                {" "}
                The biggest takeaways from the first Jan. 6 hearing
              </h6>
            </div>
            <div className="col-lg-1 d-flex align-items-center justify-content-end gap-1">
              <SlArrowLeft className="bg-white fs-3 text-muted" />
              <SlArrowRight className="bg-white fs-3 text-muted" />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
