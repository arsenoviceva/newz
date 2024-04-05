import { Container, Row, Col } from 'react-bootstrap';
import { SlArrowRight } from "react-icons/sl";
import { LargeCard } from '../LargeCard';
import { SmallCard } from '../SmallCard';



export const NewsBlockEnd = () => {
    return (
        <Container>
            <Row>
                <Col md={4} className="pb-3">
                    <a href="" className="text-decoration-none fs-20px">BUSINESS <SlArrowRight className="fs-20px" /> </a>

                </Col>
                <Col md={4} className="pb-3">
                    <a href="" className="text-decoration-none fs-20px">POLITICS <SlArrowRight className="fs-20px" /> </a>

                </Col>
                <Col md={4} className="pb-3">
                    <a href="" className="text-decoration-none fs-20px">MARKET <SlArrowRight className="fs-20px" /> </a>

                </Col>
                <Col md={4} className="border-end">
                    <LargeCard badgeTitle={'BUSINESS'} cardTitle={'Strategy in business: The mindset of chess'} />
                    <hr />
                    <SmallCard badgeTitle={'BUSINESS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'Disputes in the South China Sea show'} />
                    <hr />
                    <SmallCard badgeTitle={'BUSINESS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'One way method'} />
                    <hr />
                    <SmallCard badgeTitle={'BUSINESS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'The partnership between Google & Shopify'} />
                </Col>

                <Col md={4} className="border-end">
                    <LargeCard badgeTitle={'POLITICS'} cardTitle={'The EU is showing signs of breaking up'} />
                    <hr />
                    <SmallCard badgeTitle={'POLITICS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'Disputes in the South China Sea show'} />
                    <hr />
                    <SmallCard badgeTitle={'POLITICS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'One way method'} />
                    <hr />
                    <SmallCard badgeTitle={'POLITICS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'The partnership between Google & Shopify'} />
                </Col>

                <Col md={4} className="border-end">
                    <LargeCard badgeTitle={'MARKET'} cardTitle={'Global Etoro exchange launch event'} />
                    <hr />
                    <SmallCard badgeTitle={'NEWS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'Disputes in the South China Sea show'} />
                    <hr />
                    <SmallCard badgeTitle={'MARKET'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'One way method'} />
                    <hr />
                    <SmallCard badgeTitle={'POLITICS'} coloredTitle={'title-without-corner rounded-0'} cardTitleColor="fs-5 text-black" backgroundColor="bg-white" cardTitle={'The partnership between Google & Shopify'} />
                </Col>
            </Row>
        </Container>
    )
}