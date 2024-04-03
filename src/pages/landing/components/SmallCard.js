import Card from 'react-bootstrap/Card';



export const SmallCard = ({ badgeTitle }) => {
    return (
        <Card>
            <Card.Header className="title-without-corner rounded-0" >{badgeTitle}</Card.Header>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title className="fs-20px">Norway exempts visas for visitors from Eu</Card.Title>
                <Card.Img className="rounded-0 w-25 h-25" variant="top" src='/images/news.jpg' />
            </Card.Body>
        </Card>

    )
}

