import { MediumCard } from "../MediumCard";
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { SmallCardDet } from './SmallCardDet';



export const DifferentNews = () => {
    return (
        <Container>
            <Row>
                <Col md={4} className="border-end">
                    <p className="text-decoration-none fs-20px">POPULAR POSTS </p>

                    <Card className="mt-3 border-0 bg-white">

                        <Card.Header className="title-without-corner rounded-0" >MARKET</Card.Header>
                        <Card.Body className="px-0">
                            <Card.Title className="fs-4">The 6th session of the US Congress today</Card.Title>
                            <Card.Text className="pt-3">

                                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                                    <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                                    <LiaComment className="fs-5 ms-4" /> 55
                                </div>
                            </Card.Text>
                            <Card.Img className="rounded-0" variant="top" src='/images/news.jpg' />

                        </Card.Body>
                    </Card >
                    <hr />
                    <Card className="mt-3 border-0 bg-white">

                        <Card.Header className="title-without-corner rounded-0" >MARKET</Card.Header>
                        <Card.Body className="px-0">
                            <Card.Title className="fs-4">The 6th session of the US Congress today</Card.Title>
                            <Card.Text className="pt-3">

                                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                                    <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                                    <LiaComment className="fs-5 ms-4" /> 55
                                </div>
                            </Card.Text>
                            <Card.Img className="rounded-0" variant="top" src='/images/news.jpg' />

                        </Card.Body>
                    </Card >
                    <hr />
                    <Card className="mt-3 border-0 bg-white pb-0">
                        <Card.Header className="title-without-corner rounded-0" >MARKET</Card.Header>
                        <Card.Body className="px-0">
                            <Card.Title className="fs-4">The 6th session of the US Congress today</Card.Title>
                            <Card.Text className="pt-3">

                                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                                    <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                                    <LiaComment className="fs-5 ms-4" /> 55
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card >
                    <hr />
                    <Card className="mt-3 border-0 bg-info p-3">

                        <Card.Header className="rounded-0 border-0 fw-bold bg-info m-0 p-0" >SPONSORED</Card.Header>
                        <Card.Body className="px-0">
                            <Card.Title className="fs-4">Sixsense Resort 5 stars just $1,299</Card.Title>
                            <Card.Text className="pt-3">

                                <div className="my-4 me-5 d-flex  align-items-center gap-2">
                                    <a href="" className="text-decoration-none fs-20px"> traveloka.com <LuArrowUpRightSquare /></a>

                                </div>
                            </Card.Text>
                            <Card.Img className="rounded-0" variant="top" src='/images/travel.jpg' />

                        </Card.Body>
                    </Card >


                </Col>
                <Col md={8}>
                    <p className="text-decoration-none fs-20px">RECENT POSTS </p>

                    <SmallCardDet badgeTitle="NEWS" />
                    <hr />
                    <SmallCardDet badgeTitle="NEWS" />
                    <hr />
                    <SmallCardDet badgeTitle="TECHNOLOGY" />
                    <hr />

                    <Card>
                        <Card.Img src="/images/smallcard2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Header className="title-without-corner rounded-0" >BUSINESS</Card.Header>
                            <Card.Title className="text-white">Real Estate in California</Card.Title>
                            <div className="my-4 me-5 d-flex  align-items-center gap-2 text-white">
                                <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                                <LiaUserSolid className="fs-5 ms-4" /> By <strong>Admin</strong>
                                <LiaComment className="fs-5 ms-4" /> 55 comments
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                    <hr />
                    <SmallCardDet badgeTitle="MARKET" />
                    <hr />
                    <SmallCardDet badgeTitle="POLITICS" />
                </Col>
            </Row>
        </Container >



    )
}