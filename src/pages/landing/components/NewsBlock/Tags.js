import { Container, Row, Col } from "react-bootstrap";

export const Tags = () => {
  return (
    <Container className="border px-3 py-4">
      <Row>
        <Col md={12} className="d-flex flex-wrap align-items-center gap-2">
          <span className="tags">Covid-19</span>
          <span className="tags bg-primary text-white">Bitcoin</span>
          <span className="tags">NFT</span>
          <span className="tags">Elon Musk</span>
          <span className="tags">Google Cloud</span>
          <span className="tags">Crypto</span>
          <span className="tags">Marketplace</span>
          <span className="tags">Game Consoles</span>
          <span className="tags">Robotics</span>
          <span className="tags">Hackers</span>
        </Col>
      </Row>
    </Container>
  );
};
