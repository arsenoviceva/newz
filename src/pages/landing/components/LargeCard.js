import Card from 'react-bootstrap/Card';


import { LiaCalendarAlt } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";





export const LargeCard = ({ isUser, badgeTitle, cardTitle }) => {
    return (
        <Card>
            <Card.Header className="title-without-corner rounded-0" >
                {badgeTitle}
            </Card.Header>
            <Card.Body className="px-0">
                <Card.Title className="fs-2">{cardTitle}</Card.Title>
                <Card.Text className="pt-3">
                    The social media company is in discussions to sell itself to Elon, a dramatic turn of events just 11 days after the Blake Lemoine conversations with the AI, which he called a "person", but Google said the evidence doesn't [...]
                    <div className="my-4 me-5 d-flex  align-items-center gap-2">
                        <LiaCalendarAlt className="fs-5" /> Dec 14, 2022
                        {isUser && <><LiaUserSolid className="fs-5 ms-4" />  By <strong>Admin</strong></>}
                        <LiaComment className="fs-5 ms-4" /> 55 comments
                    </div>
                </Card.Text>
                <Card.Img className="rounded-0" variant="top" src='/images/news.jpg' />

            </Card.Body>
        </Card >
    )
}