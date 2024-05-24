import { useState } from "react";
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
import { SlArrowUp } from "react-icons/sl";

export const Footer = () => {
  const [language, setLanguage] = useState("English");
  const changeLanguage = () => {
    if (language === "English") {
      setLanguage("German");
    }
    if (language === "German") {
      setLanguage("English");
    }
  };
  return (
    <div className="bg-primary">
      <Container className="mt-5 ">
        <Row className="pt-5">
          <Col md={4} className="p-0">
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
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <LiaTwitter className="social-footer-white" />
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <LiaFacebookF className="social-footer" />
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <LiaInstagram className="social-footer" />
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <LiaYoutube className="social-footer" />
              </a>
            </Col>
          </Col>
          <Col md={4} lg={2} xs={6} className="p-0">
            <h5 className="footer-title"> Topics</h5>
            <ul className="list-unstyled text-white">
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> News</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Business</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Tech</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Politics</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Economy</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Market</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Video</li>
              </a>
            </ul>
          </Col>
          <Col md={4} lg={2} xs={6} className="p-0">
            <h5 className="footer-title"> Help</h5>
            <ul className="list-unstyled text-white">
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> About</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Contact</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Advertise</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Career</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> Policy</li>
              </a>
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                <li className="pb-2"> FAQ</li>
              </a>
            </ul>
          </Col>
          <Col lg={4} xs={12} className="p-0">
            <h5 className="footer-title "> Newsletter</h5>
            <p className="text-white">
              {" "}
              Register now to get latest updates on promotions and coupons.{" "}
            </p>
            <div className="send-email-form">
              <LiaEnvelopeSolid className="text-white fs-3 d-none d-md-block" />
              <input
                type="text"
                className="form-input"
                placeholder="Enter your email"
              />
              <div className="rounded-icon">
                <LuSendHorizonal className="text-primary cursor-pointer" />
              </div>
            </div>
            <span className="text-secondary fst-italic ">
              {" "}
              By subscribing, you accepted our{" "}
            </span>{" "}
            <span className="text-decoration-underline fw-bold text-white">
              {" "}
              <a
                href="https://www.google.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-reset"
              >
                Policy
              </a>
            </span>
          </Col>
          <Row className="align-items-center">
            <Col md={2} className="p-0 my-3">
              <img
                src="images/logoinv.png"
                className="img-fluid m-o p-0 w-75"
                alt="logo"
              />
            </Col>
            <Col md={4} className="p-0 mb-3 my-md-4">
              <span className="text-secondary fs-15px">
                2022 Copyrights by{" "}
              </span>{" "}
              <span className="text-white fs-15px">
                {" "}
                <strong>Newz</strong> All rights reserved.
              </span>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center justify-content-end gap-2">
                <img
                  src={`/images/${
                    language === "English"
                      ? "englishFlag.png"
                      : "germanFlag.png"
                  }`}
                  className="language-flag"
                />
                <div class="dropdown">
                  <button
                    className="bg-primary text-white border-0 dropddown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {language}
                    <SlArrowUp className="ms-2 text-white fs-5 cursor-pointer" />
                  </button>
                  <ul className="dropdown-menu bg-primary text-white border-1">
                    <li onClick={changeLanguage}>
                      <a
                        className="dropdown-item bg-primary text-white"
                        href="#"
                      >
                        {language === "English" ? (
                          <p className="m-0"> German</p>
                        ) : (
                          <p className="m-0"> English</p>
                        )}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
