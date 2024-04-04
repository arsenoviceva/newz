import Container from 'react-bootstrap/Container';
import { TopHeader } from './components/TopHeader';
import { Header } from './components/Header';
import { NavbarCollapse } from './components/Navbar';
import { BreakingNewsSlider } from './components/BreakingNewsSlider';
import { LargeCard } from './components/LargeCard';
import { MediumCard } from './components/MediumCard';
import { SampleBanner } from './components/SampleBanner'
import { Col, Row } from 'react-bootstrap';
import { HorisontalLine } from './components/HorisontalLine';
import { SmallNewsBlock } from './components/NewsBlock/SmallNewsBlock';
import { NewsBlock } from './components/NewsBlock/NewsBlock';



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
                    <Col md={6} className='border-end pe-4'>
                        <LargeCard />
                    </Col>
                    <Col md={6} className="ps-4">
                        <LargeCard />
                    </Col>
                </Row>
            </Container>
            <HorisontalLine />
            <Container>
                <Row>
                    <Col md={4} className="border-end">
                        <MediumCard isLive badgeTitle={"POLITICS"} />

                    </Col>
                    <Col md={4} className="border-end">
                        <MediumCard badgeTitle={"POLITICS"} />

                    </Col>
                    <Col md={4}>
                        <MediumCard badgeTitle={"POLITICS"} />

                    </Col>
                </Row>
            </Container>
            <HorisontalLine />
            <SampleBanner />
            <HorisontalLine />
            <SmallNewsBlock />

            <HorisontalLine />
            <NewsBlock />





        </>
    )
}