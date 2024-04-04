import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcons } from './SocialIcons';
import { Tags } from './Tags';


export const Miscellaneous = () => {
    return (
        <Container>
            <Row>
                <Col md={12} className="border-start">
                    <p className="text-decoration-none fs-20px">STAY CONNECTED </p>
                    <SocialIcons />
                    <hr />
                    <p className="text-decoration-none fs-20px">HOT TAGS TODAY </p>
                    <Tags />
                </Col>
            </Row>
        </Container>
    )
}