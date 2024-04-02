import Container from 'react-bootstrap/Container';
import { TopHeader } from './components/TopHeader';
import { Header } from './components/Header';
import { NavbarCollapse } from './components/Navbar';
import { BreakingNewsSlider } from './components/BreakingNewsSlider';
import { LargeCard } from './components/LargeCard';

export const LandingPage = () => {
    return (
        <>

            <TopHeader />
            <Header />
            <NavbarCollapse />
            <BreakingNewsSlider />
            <Container className="d-flex gap-1">
                <LargeCard />
                <LargeCard />

            </Container>


        </>
    )
}