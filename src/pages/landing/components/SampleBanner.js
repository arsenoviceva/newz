
import { Container, Col, Row } from 'react-bootstrap';

export const SampleBanner = ({ imageUrl }) => {
    return (
        <Container className="d-flex justify-content-center alignt-items-center">
            <Row>
                <img src={imageUrl} />
            </Row>



        </Container>

    )
}