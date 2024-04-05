import Card from 'react-bootstrap/Card';


export const SimpleCard = ({ badgeTitle }) => {
    return (
        <Card id="simple-card">
            <Card.Img src="/images/smallcard2.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Header className="title-without-corner rounded-0" >{badgeTitle}</Card.Header>
                <Card.Title className="text-white">Real Estate in California</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
}