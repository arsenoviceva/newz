import Card from 'react-bootstrap/Card';


export const LargeCard = () => {
    return (
        <Card className="border-0 bg-white">
            <Card.Header className="bg-primary border-0 text-white" >NEWS</Card.Header>
            <Card.Body>
                <Card.Title id="largeCardTitle">Biden asks Congress for $33 bilion to support Ukraine</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

            </Card.Body>
        </Card >
    )
}