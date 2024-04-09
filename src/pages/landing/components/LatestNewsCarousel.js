import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const carouselItems = [
  {
    id: 1,
    title: "Forbes #3: Top 10 Businessman NYC",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/carousel1.jpg",
  },
  {
    id: 2,
    title: "Forbes #3: Top 10 Businessman MIAMI",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/news.jpg",
  },
  {
    id: 3,
    title: "Forbes #3: Top 10 Businessman LAS VEGAS",
    description:
      "Its first decline in subscribers since 2011 triggered a $54 bilion stock value loss",
    image: "/images/smallcard.jpg",
  },
];

export const LatestNewsCarousel = () => {
  const carouselLength = carouselItems.length;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onBackClick = () => {
    if (index === 0) {
      setIndex(carouselLength - 1);
      return;
    }
    setIndex(index - 1);
  };

  const onNextClick = () => {
    if (index === carouselLength - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  console.log(index, "index");
  return (
    <div id="latest-news-carousel">
      <div className="position-title title-without-corner">BUSINESS</div>
      <SlArrowLeft
        onClick={onBackClick}
        className={`left bg-white fs-2 text-muted border border-secondary p-1`}
      />
      <SlArrowRight
        onClick={onNextClick}
        className="right bg-white fs-2 text-muted border border-secondary p-1"
      />

      <Carousel indicators={false} controls={false} activeIndex={index}>
        {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images[index]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Forbes #3: Top 10 Businessman NYC</h2>
                        <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and [...]</p>
                        <LiaCalendarAlt className="fs-20px" /> Dec 14, 2022
                        <LiaUserSolid className="fs-20px ms-4" /> By <strong>Admin</strong>
                        <LiaComment className="fs-20px ms-4" /> 55 comments
                    </Carousel.Caption>
                        
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images[index]}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Forbes #3: Top 10 Businessman Miami</h3>
                        <p>Its first decline in subscribes since 2011 triggered a $54 bilion stock value loss and [...]</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
        {carouselItems?.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 h-100"
                src={item.image}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
