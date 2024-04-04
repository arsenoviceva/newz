import { Container, Row, Col } from "react-bootstrap"
import { DifferentNews } from "./DifferentNews"
import { Miscellaneous } from "./Miscellaneous"
export const NewsBlock = () => {
    return (

        <Container>
            <Row>
                <Col md={9}>
                    <DifferentNews />
                </Col>
                <Col md={3}>
                    <Miscellaneous />
                </Col>
            </Row>
        </Container>
    )
}