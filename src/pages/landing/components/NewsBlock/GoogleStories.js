import { Container, Row, Col } from "react-bootstrap"



export const GoogleStories = ({ borderColor, title }) => {
    return (
        <Container >

            <Row className="d-flex align-items-center">
                <Col md={4}>

                    <img className={borderColor} src="/images/story.jpg" alt="google story" />

                </Col>
                <Col md={8} className="fs-20px fw-bold">
                    {title}
                </Col>

            </Row>
        </Container>

    )
}