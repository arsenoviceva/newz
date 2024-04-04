import { Container, Row, Col } from 'react-bootstrap';
import { LiaFacebookF } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaYoutube } from "react-icons/lia";





export const SocialIcons = () => {
    return (
        <Container className="border pt-3 my-3">
            <Row className="d-flex ">
                <Col md={2} className="border-end" >
                    <LiaFacebookF className="social-icons-f" />

                </Col>
                <Col md={10} >
                    <p> <strong>575,5K </strong> Followers</p>
                </Col>

            </Row >
            <hr />
            <Row>
                <Col md={2} className="border-end" >
                    <LiaTwitter className="social-icons-t" />

                </Col>
                <Col md={10} >
                    <p> <strong>215,5K </strong> Followers</p>
                </Col>

            </Row >
            <hr />
            <Row>
                <Col md={2} className="border-end" >
                    <LiaInstagram className="social-icons-i" />

                </Col>
                <Col md={10} >
                    <p> <strong>98K </strong> Followers</p>
                </Col>

            </Row >
            <hr />
            <Row>
                <Col md={2} className="border-end" >
                    <LiaYoutube className="social-icons-y" />

                </Col>
                <Col md={10} >
                    <p> <strong>55,5K </strong> Followers</p>
                </Col>

            </Row >
        </Container >
    )
}