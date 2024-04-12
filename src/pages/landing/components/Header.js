import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaCloudSunSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <Container className="bg-white py-3">
      <Row className="align-items-center ">
        <div className="col-md-8">
          <div className="row d-flex  align-items-center">
            <div className="col-md-4 p-0 ">
              <img
                className="img-fluid m-o p-0"
                src="/images/news-logo-2.png"
                alt="logo"
              />
            </div>

            <div className="col-6 col-md-4 d-flex">
              <LiaCalendarAlt className="fs-2" />
              <ul className="list-unstyled m-0">
                <li>
                  <h6 className="fw-bold text-black"> Monday</h6>
                  <h6 className="text-muted"> Nov 25, 2023</h6>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 d-flex">
              <LiaCloudSunSolid className="fs-2" />
              <ul className="list-unstyled m-0">
                <li>
                  <h6 className="fw-bold text-black">
                    {" "}
                    32<sup>o</sup>C, Cloudy
                  </h6>
                  <h6 className="text-muted"> New York</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 my-2">
          <div className="row d-flex align-items-center">
            <div className="col-5">
              <div className="d-flex align-items-center justify-content-between">
                <LiaEnvelopeSolid className="fs-3" />
                <h6 className="my-1 fw-bold"> SUBSCRIBE</h6>
              </div>
              <hr className="opacity-100 m-0" />
            </div>

            <div className="col-2">
              <LiaUserSolid className="fs-2" />
            </div>
            <div className="col-2 d-flex border-end border-dark">
              <div className="position-relative">
                <LiaShoppingBagSolid className="fs-2" />
                <div className="top-right-icon" />
              </div>
            </div>

            <div className="col-3">
              <LiaSearchSolid className="fs-2 ms-3" />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
