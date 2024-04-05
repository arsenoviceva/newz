import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";



export const LatestNewsCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const onBackClick = () => {

    }

    const onNextClick = () => {

    }



    return (

        <div id='latest-news-carousel'>
            <div className="position title-without-corner">BUSINESS</div>
                <SlArrowLeft className="left bg-white fs-2 text-muted border border-secondary p-1" />
                <SlArrowRight className="right bg-white fs-2 text-muted border border-secondary p-1" />
            <Carousel indicators={false} controls={false} activeIndex={index}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='/images/carousel.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Forbes #3: Top 10 Businessman NYC</h3>
                        <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and [...]</p>
                        <LiaCalendarAlt className="fs-20px" /> Dec 14, 2022
                        <LiaUserSolid className="fs-20px ms-4" /> By <strong>Admin</strong>
                        <LiaComment className="fs-20px ms-4" /> 55 comments
                    </Carousel.Caption>
                        
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='/images/carousel.jpg'
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Forbes #3: Top 10 Businessman NYC</h3>
                        <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and [...]</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='/images/carousel.jpg'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Forbes #3: Top 10 Businessman NYC</h3>
                        <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and [...]</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}