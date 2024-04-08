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
                    <Col md={7} className="ps-md-0">
                        <LatestNewsCarousel />
                    </Col>
                    <Col md={5}>
                        <SmallCard badgeTitle={'NEWS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'Norway exempts visas for visitors from EU'} />
                        <hr />
                        <SmallCard badgeTitle={'MARKET'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'DOW lika a bull'} />
                        <hr />
                        <SmallCard badgeTitle={'POLITICS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'Sadabell ATM become popular in Ohio'} />
                        <hr />
                        <SmallCard badgeTitle={'MARKET'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'US accuses Russia of currency manipulation. What did Putin said?'} />
                        <hr />
                        <a href="" className="text-decoration-none fs-20px">See all posts <SlArrowRight className="fs-10px" /> </a>
                    </Col>
                </Row>
            </Row>
        </>

    )
}