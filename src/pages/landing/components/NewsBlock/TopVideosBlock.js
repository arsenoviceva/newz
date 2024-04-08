import { Container, Row, Col } from 'react-bootstrap';
import { LatestNewsCarousel } from '../LatestNewsCarousel';
import Carousel from 'react-bootstrap/Carousel';
import { SmallCard } from '../SmallCard';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { useState } from 'react';




const carouselItems = [
    {id: 1, title: 'Forbes #3: Top 10 Businessman NYC',  description: 'Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss',  image:  '/images/smallcard2.jpg',},
    {id: 2, title: 'Forbes #3: Top 10 Businessman MIAMI', description: 'Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss', image: '/images/news.jpg',},
    {id: 3, title: 'Forbes #3: Top 10 Businessman LAS VEGAS', description: 'Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss', image: '/images/smallcard.jpg',},
    {id: 4, title: 'Forbes #3: Top 10 Businessman TEXAS', description: 'Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss', image: '/images/travel.jpg',}

 ];
 
export const TopVideosBlock = () => {

    const carouselLength = carouselItems.length;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const onBackClick = (nextId) => {
        setIndex(
            nextId === 0 ? carouselLength - 1 : nextId  
        )
    }

    const onNextClick = (nextId) => {
        setIndex( 
        nextId === carouselLength ? 0 : nextId
        );

    }

    console.log(index,'index');

    
    return (
        <div className="bg-primary">
            <Container className="my-5 ">
                <Row className="py-5 gap-4">
                    <Col md={12}>
                        <p className="text-decoration-none fs-20px text-white">TOP VIDEOS LAST WEEK </p>
                    </Col>
                    <Col md={7} className=" p-0">

                    <div id='top-videos-carousel'>

             <div className="position-title title-without-corner">BUSINESS</div>
                <SlArrowLeft 
                    onClick={() => onBackClick(index-1)} className={`left bg-white fs-2 text-muted border border-secondary p-1`} />
                <SlArrowRight 
                    onClick={() => onNextClick(index+1)} className="right bg-white fs-2 text-muted border border-secondary p-1" />

                         <Carousel className="w-100" indicators={false} controls={false} activeIndex={index}>
                            {carouselItems?.map(item=>{
                                return(
                                    <Carousel.Item key={item.id}>
                                    <img
                                        className="d-block w-100 h-100"
                                        src={item.image}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <LiaCalendarAlt className="fs-20px" /> Dec 14, 2022
                                        <LiaUserSolid className="fs-20px ms-4" /> By Admin
                                        <LiaComment className="fs-20px ms-4" /> 55 comments
                                    </Carousel.Caption>
                                </Carousel.Item>
                                              )
                                         })}
               
                     </Carousel>
                                
            </div>
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