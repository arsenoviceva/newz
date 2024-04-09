import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

export const TopHeader = () => {
  return (
    <div className="bg-primary  d-flex justify-content-between ">
      <Container>
        <Row className="align-items-center py-2">
          <Col>
            <h6 className="m-0 text-white"> Market Data Today</h6>
          </Col>
          {/*<Col>
            <span className="text-white">
              {" "}
              <strong> DOW </strong> 31,392.79{" "}
              <TiArrowSortedUp className="text-white " /> 12,%
            </span>
          </Col>
          <Col className="market-bg">
            <span className="text-white">
              {" "}
              <strong> NASDAQ </strong> 31,392.79{" "}
              <TiArrowSortedDown className="text-white " /> 7,12%
            </span>
          </Col>
          <Col>
            <span className="text-white">
              {" "}
              <strong> S&P 500 </strong> 31,392.79{" "}
              <TiArrowSortedDown className="text-white" /> 0,25%
            </span>
          </Col>
          <Col>
            <span className="text-white">
              {" "}
              <strong> TSLA </strong> 31,392.79{" "}
              <TiArrowSortedUp className="text-white  " /> 3,57%
            </span>
  </Col>**/}
        </Row>
      </Container>
    </div>
  );
};
