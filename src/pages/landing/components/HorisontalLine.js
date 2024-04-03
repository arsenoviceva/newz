import { Container, Col, Row } from 'react-bootstrap';


export const HorisontalLine = ({ isBolder, }) => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <hr className={isBolder ? ' opacity-100 fw-bolder border-2' : 'my-5'} />
                </Col>
            </Row>
        </Container>
    )
}