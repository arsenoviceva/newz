import { Container, Row, Col } from 'react-bootstrap';


export const Tags = () => {
    return (
        <Container className="border p-3">
            <Row className="d-flex justify-content-between align-items-center gap-2">
                <Col md={12}>
                    <span className="border">
                        Covid-19
                    </span>
                    <span className="border bg-primary text-white">
                        Bitcoin
                    </span>
                    <span className="border">
                        NFT
                    </span>
                    <span className="border">
                        Elon Musk
                    </span>
                    <span className="border">
                        Google Cloud
                    </span>
                    <span className="border">
                        Crypto
                    </span>
                    <span className="border">
                        Marketplace
                    </span>
                    <span className="border">
                        Game Consoles
                    </span>
                    <span className="border">
                        Robotics
                    </span>
                    <span className="border">
                        Hackers
                    </span>
                </Col>
            </Row>

        </Container>
    )
}