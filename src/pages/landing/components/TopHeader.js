import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const topHeaderData = [
  {
    id: 1,
    title: "DOW",
    number: "31,392.79 ",
    percentage: "12,5%",
    success: true,
  },
  {
    id: 2,
    title: "NASDAQ",
    number: "12,839.05",
    percentage: "7,12%",
    success: false,
    highlighted: true,
  },
  {
    id: 3,
    title: "S&P 500",
    number: "4,217.71 ",
    percentage: "12,5%",
    success: false,
  },
  {
    id: 4,
    title: "TSLA",
    number: "3,689.25 ",
    percentage: "3,57%",
    success: true,
  },
];

export const TopHeader = () => {
  return (
    <div className="bg-primary  d-flex justify-content-between ">
      <Container>
        <Row className="align-items-center py-2">
          <Col>
            <h6 className="m-0 text-white"> Market Data Today</h6>
          </Col>
          <Col md={10} className="rotation-wrapper d-none d-lg-flex">
            <div className=" d-flex justify-content-evenly rotating-text w-100 gap-3">
              {topHeaderData?.map((headerItem) => {
                return (
                  <div
                    key={headerItem.id}
                    className={`d-flex align-items-center gap-2 rotation-content ${
                      headerItem?.highlighted ? "bg-primary-dark px-2" : ""
                    }`}
                  >
                    <h6 className="text-uppercase text-white">
                      {headerItem.title}
                    </h6>
                    <span className="text-white pb-1"> {headerItem.num} </span>
                    <span
                      className={`text-${
                        headerItem?.success ? "success" : "danger"
                      } pb-1`}
                    >
                      {" "}
                      <i class="bi bi-caret-up-fill"></i>
                      {headerItem.percentage}{" "}
                    </span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
