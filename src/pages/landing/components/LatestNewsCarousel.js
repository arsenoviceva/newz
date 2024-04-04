import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';



export const LatestNewsCarousel = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='/images/carousel.jpg'
                    alt="First slide"
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

    )
}