import Card from 'react-bootstrap/Card';



export const SmallCard = ({ cardTitleColor, cardTitle, coloredTitle, badgeTitle, backgroundColor }) => {
    return (
        <Card className={backgroundColor}>
            <Card.Header className={coloredTitle}>{badgeTitle}</Card.Header>
            <Card.Body className="d-flex justify-content-between align-items-center px-0">
                <Card.Title className={cardTitleColor}>{cardTitle}</Card.Title>
                <Card.Img className="rounded-0 w-25 h-25" variant="top" src='/images/smallcard.jpg' />
            </Card.Body>
        </Card>

    )
}

