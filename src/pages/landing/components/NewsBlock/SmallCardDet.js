import Card from 'react-bootstrap/Card';
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";


export const SmallCardDet = ({ badgeTitle }) => {
    return (
        <Card className="mt-3" id="small-card">
            <Card.Header className="title-without-corner rounded-0" >{badgeTitle}</Card.Header>
            <Card.Body className="p-0">
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="fs-4">Norway exempts visas for visitors from Eu</Card.Title>
                    <Card.Img className="rounded-0" variant="top" src='/images/smallcard.jpg' />
                </div>
                <div className="d-flex  align-items-center gap-2 ">
                    <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                    <LiaComment className="fs-5 ms-4" /> 55 comments
                </div>

            </Card.Body>

        </Card>

    )
}