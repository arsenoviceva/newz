import Container from "react-bootstrap/Container";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { NavbarCollapse } from "./components/Navbar";
import { BreakingNewsSlider } from "./components/BreakingNewsSlider";
import { LargeCard } from "./components/LargeCard";
import { MediumCard } from "./components/MediumCard";
import { SampleBanner } from "./components/SampleBanner";
import { Col, Row } from "react-bootstrap";
import { HorisontalLine } from "./components/HorisontalLine";
import { SmallNewsBlock } from "./components/NewsBlock/SmallNewsBlock";
import { NewsBlock } from "./components/NewsBlock/NewsBlock";
import { TopVideosBlock } from "./components/NewsBlock/TopVideosBlock";
import { Columnists } from "./components/Columnists";
import { NewsBlockEnd } from "./components/NewsBlock/NewsBlockEnd";
import { Footer } from "./components/Footer";

export const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <NavbarCollapse />
      <HorisontalLine isBolder />
      <BreakingNewsSlider />
      <Container>
        <Row>
          <Col md={6} className="border-md-end pe-md-4">
            <LargeCard
              isUser
              badgeTitle={"NEWS"}
              cardTitle={
                "Biden asks Congress for $33 bilion to support Ukraine"
              }
            />
          </Col>
          <Col md={6} className="ps-md-4">
            <LargeCard
              isUser
              badgeTitle={"POLITICS"}
              cardTitle={"Putin preparing to starve parts of developing world"}
            />
          </Col>
        </Row>
      </Container>
      <HorisontalLine />
      <Container>
        <Row>
          <Col md={4} className="border-md-end">
            <MediumCard isLive badgeTitle={"POLITICS"} />
          </Col>
          <Col md={4} className="border-md-end">
            <MediumCard badgeTitle={"MARKET"} />
          </Col>
          <Col md={4}>
            <MediumCard badgeTitle={"ECONOMIC"} />
          </Col>
        </Row>
      </Container>
      <HorisontalLine />
      <SampleBanner imageUrl={"/images/banner.png"} />
      <HorisontalLine />
      <SmallNewsBlock />
      <HorisontalLine />
      <NewsBlock />
      <TopVideosBlock />
      <Columnists />
      <HorisontalLine />
      <SampleBanner imageUrl={"/images/largebanner1.jpg"} />
      <HorisontalLine />
      <NewsBlockEnd />
      <Footer />
    </>
  );
};
