import { Col, Row, Container } from "react-bootstrap";
import { Columnist } from "./Columnist";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export const Columnists = () => {
  return (
    <Container>
      <Row>
        <Col md={11}>
          <a href="/" className="text-decoration-none fs-20px">
            TOP COLUMNIST <SlArrowRight className="fs-5" />{" "}
          </a>
        </Col>
        <Col md={1} className=" d-flex justify-content-end">
          <SlArrowLeft className="bg-white fs-5 text-muted border border-secondary p-1" />
          <SlArrowRight className="bg-white fs-5 text-muted border border-secondary p-1" />
        </Col>
        <Col md={6} lg={3}>
          <Columnist
            name={"Conor Bradley"}
            columnistBadge={"BUSINESS, NEWS"}
            text={
              "My content focus into businessm politic that allows anyone with a cellphone to scan cultural landmarks and monuments in danger."
            }
          />
        </Col>
        <Col md={6} lg={3}>
          <Columnist
            name={"Luis Diaz"}
            columnistBadge={"POLITICS, MARKET"}
            text={"My content focus into businessm politic that allows anyone."}
          />
        </Col>
        <Col md={6} lg={3}>
          <Columnist
            name={"Albertno Moreno"}
            columnistBadge={"VIDEOS, TECHNOLOGY"}
            text={
              "My content focus into businessm politic that allows anyone with a cellphone to monuments in danger."
            }
          />
        </Col>
        <Col md={6} lg={3}>
          <Columnist
            name={"Darwin Nunez"}
            columnistBadge={"ECONOMICS"}
            text={
              "My content focus into businessm politic that allows anyone with a cellphone to scan cultural landmarks and monuments in danger."
            }
          />
        </Col>
      </Row>
    </Container>
  );
};
