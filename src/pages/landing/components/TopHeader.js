import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';


export const TopHeader = () => {
    return (
        <div className="bg-primary py-2 d-flex justify-content-between">
            <Container>
                <Row>
                    <Col md={12} >
                        <h6 className="m-0 text-white"> Market Data Today</h6>

                    </Col>
                </Row>
            </Container>
        </div>
    )

}