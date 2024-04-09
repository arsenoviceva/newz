import { Container, Row, Col } from "react-bootstrap";
import {
  LiaHomeSolid,
  LiaPhoneSolid,
  LiaEnvelopeSolid,
  LiaTwitter,
  LiaFacebookF,
  LiaInstagram,
  LiaYoutube,
} from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="mt-5 ">
        <Row className="pt-5">
          <Col md={5} className="p-0">
            <h5 className="footer-title"> Newz - Business Magazine </h5>
            <Row>
              <Col xs={1} className="p-0">
                <LiaHomeSolid className="text-white fs-5" />
              </Col>
              <Col xs={11}>
                <p className="text-white">
                  {" "}
                  223 Orhard St, Manhattan, NY 9032{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="p-0">
                <LiaPhoneSolid className="text-white fs-5" />
              </Col>
              <Col xs={11}>
                <p className="text-white"> +031 5689 89 98 </p>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="p-0">
                <LiaEnvelopeSolid className="text-white fs-5" />
              </Col>
              <Col xs={11}>
                <p className="text-white"> technology@newz.com </p>
              </Col>
            </Row>
            <Col md={12} className="ps-0 py-5">
              <LiaTwitter className="social-footer-white" />
              <LiaFacebookF className="social-footer" />
              <LiaInstagram className="social-footer" />
              <LiaYoutube className="social-footer" />
            </Col>
          </Col>
          <Col md={2} xs={6} className="p-0">
            <h5 className="footer-title"> Topics</h5>
            <ul className="list-unstyled text-white">
              <li className="text-decoration-underline pb-2"> News</li>
              <li className="pb-2"> Business</li>
              <li className="pb-2"> Tech</li>
              <li className="pb-2"> Politics</li>
              <li className="pb-2"> Economy</li>
              <li className="pb-2"> Market</li>
              <li className="pb-2"> Video</li>
            </ul>
          </Col>
          <Col md={2} xs={6} className="p-0">
            <h5 className="footer-title"> Help</h5>
            <ul className="list-unstyled text-white">
              <li className="pb-2"> About</li>
              <li className="pb-2"> Contact</li>
              <li className="pb-2"> Advertise</li>
              <li className="pb-2"> Career</li>
              <li className="pb-2"> Policy</li>
              <li className="pb-2"> FAQ</li>
            </ul>
          </Col>
          <Col md={3} className="p-0">
            <h5 className="footer-title "> Newsletter</h5>
            <p className="text-white">
              {" "}
              Register now to get latest updates on promotions and coupons.{" "}
            </p>
            <div className="send-email-form">
              <LiaEnvelopeSolid className="text-white fs-3" />
              <input
                type="text"
                className="form-input"
                placeholder="Enter your email"
              />
              <div className="rounded-icon">
                <LuSendHorizonal className="text-primary" />
              </div>
            </div>
            <span className="text-secondary fst-italic ">
              {" "}
              By subscribing, you accepted our{" "}
            </span>{" "}
            <span className="text-decoration-underline fw-bold text-white">
              {" "}
              Policy
            </span>
          </Col>
          <Row>
            <Col md={2} className="p-0 my-4">
              <img
                src="images/logoinv.png"
                className="img-fluid m-o p-0 w-75"
                alt="logo"
              />
            </Col>
            <Col md={4} className="p-0 my-4">
              <span className="text-secondary fs-10px">
                2022 Copyrights by{" "}
              </span>{" "}
              <span className="text-white fs-10px">
                {" "}
                <strong>Newz</strong> All rights reserved.
              </span>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
