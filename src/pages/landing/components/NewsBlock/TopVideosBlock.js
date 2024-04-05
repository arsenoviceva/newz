import { Container, Row, Col } from 'react-bootstrap';
import { LatestNewsCarousel } from '../LatestNewsCarousel';
import Carousel from 'react-bootstrap/Carousel';
import { SmallCard } from '../SmallCard';
import { SlArrowRight } from "react-icons/sl";


export const TopVideosBlock = () => {
    return (
        <div className="bg-primary">
            <Container className="my-5 ">
                <Row className="d-flex py-5 gap-4">
                    <Col md={12}>
                        <p className="text-decoration-none fs-20px text-white">TOP VIDEOS LAST WEEK </p>
                    </Col>
                    <Col md={7} className=" p-0">
                        <Carousel className="w-100">
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src='/images/smallcard.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Forbes #3: Top 10 Businessman NYC</h3>
                                    <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and[...]</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src='/images/smallcard2.jpg'
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Forbes #3: Top 10 Businessman NYC</h3>
                                    <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and[...]</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={4} className="left-border">
                        <p className="text-decoration-none fs-20px text-white">VIDEOS UP NEXT </p>
                        <SmallCard badgeTitle={'NEWS'} coloredTitle={'title-without-corner-white rounded-0'} cardTitle={'Strategy marketing of Fedex Inc'} cardTitleColor="fs-5 text-white text-decoration-underline" backgroundColor="bg-primary" />
                        <hr className="line-color" />
                        <SmallCard badgeTitle={'BUSINESS'} coloredTitle={'title-without-corner-white rounded-0'} cardTitle={'Art of Marketing'} cardTitleColor="fs-5 text-white" backgroundColor="bg-primary" />
                        <hr className="line-color" />
                        <SmallCard badgeTitle={'VIDEOS'} coloredTitle={'title-without-corner-white rounded-0'} cardTitle={'Google officially acquired Yahoo today'} cardTitleColor="fs-5 text-white" backgroundColor="bg-primary" />
                        <hr className="line-color" />
                        <SmallCard badgeTitle={'MARKET'} coloredTitle={'title-without-corner-white rounded-0'} cardTitle={'Creative with service delivery in India'} cardTitleColor="fs-5 text-white" backgroundColor="bg-primary" />
                        <hr className="line-color" />
                        <a href="" className="text-decoration-none fs-20px text-white">See all posts <SlArrowRight className="fs-10px" /> </a>




                    </Col>
                </Row>
            </Container>
        </div>

    )
}