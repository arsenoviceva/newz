import { Container, Row, Col } from 'react-bootstrap';

import { LatestNews } from "../LatestNews";
import { TrendingPosts } from "../TrendingPosts";

export const SmallNewsBlock = () => {
    return (
        <Container>
            <Row>
                <Col md={9} className="ps-md-0">
                    <LatestNews />
                </Col>
                <Col md={3} className="border-start">
                    <TrendingPosts />

                </Col>
            </Row>
        </Container>
    )
}