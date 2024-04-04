import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';


export const NumberedCard = ({ badgeTitle, number }) => {
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center my-4">
                <Col md={2} className='border-end'>
                    <p className="fs-2 text-muted p-0"> {number}</p>
                </Col>
                <Col md={10} className='pe-0'>
                    <Card>
                        <Card.Header className="title-without-corner rounded-0" >{badgeTitle}</Card.Header>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <Card.Title className="fs-5">US Stock Market today</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
        </>
    )
}