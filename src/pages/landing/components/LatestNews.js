import { Container, Col, Row } from 'react-bootstrap';
import { LatestNewsCarousel } from './LatestNewsCarousel';
import { SmallCard } from './SmallCard';
import { SlArrowRight } from "react-icons/sl";

export const LatestNews = () => {
    return (
        < >
            <Row>
                <Col md={12} >
                    <a href="" className="text-decoration-none fs-20px">LATEST NEWS <SlArrowRight className="fs-20px" /> </a>
                </Col>
                <Row className="my-4">
                    <Col md={6} className="ps-md-0">
                        <LatestNewsCarousel />
                    </Col>
                    <Col md={6}>
                        <SmallCard badgeTitle={'NEWS'} />
                        <hr />
                        <SmallCard badgeTitle={'MARKET'} />
                        <hr />
                        <SmallCard badgeTitle={'POLITICS'} />
                        <hr />
                        <SmallCard badgeTitle={'MARKET'} />
                        <hr />
                        <a href="" className="text-decoration-none fs-20px">See all posts <SlArrowRight className="fs-10px" /> </a>
                    </Col>
                </Row>
            </Row>
        </>

    )
}