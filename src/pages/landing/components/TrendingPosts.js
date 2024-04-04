import { Container, Col, Row } from 'react-bootstrap';
import { SimpleCard } from './SimpleCard';
import { NumberedCard } from './NumberedCard';
import { SlArrowRight } from "react-icons/sl";



export const TrendingPosts = () => {
    return (
        <Container >
            <Row >
                <Col md={12} className="p-0">
                    <a href="" className="text-decoration-none fs-20px">TRENDING POSTS </a>
                </Col>
            </Row>
            <Row className="my-4">
                <Col md={12} className="p-0">
                    <SimpleCard badgeTitle={'BUSINESS'} />
                    <NumberedCard badgeTitle={'NEWS'} number={'2'} />
                    <NumberedCard badgeTitle={'MARKET'} number={'3'} />
                    <NumberedCard badgeTitle={'TECHNOLOGY'} number={'4'} />
                    <a href="" className="text-decoration-none fs-20px">See all posts <SlArrowRight className="fs-10px" /> </a>

                </Col>
            </Row>
        </Container>

    )
}