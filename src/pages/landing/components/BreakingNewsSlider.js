import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsLightningChargeFill } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";




export const BreakingNewsSlider = () => {
    return (
        <Container className="bg-white py-5">
            <Row className="d-flex">
                <div className="col-lg-2 bg-primary d-flex align-items-center justify-content-center gap-2 py-2">
                    <BsLightningChargeFill className="text-white" />
                    <h5 className="text-white m-0"> Breaking News</h5>
                </div>
                <div className="col-lg-9 bg-secondary d-flex align-items-center justify-content-center gap-3 py-2 px-5">
                    <h6 className="m-0 text-black text-decoration-underline"> The biggest takeaways from the first Jan. 6 hearing</h6>
                    <span className="text-muted"> {'\u2022'} </span>
                    <h6 className="m-0 text-black"> The biggest takeaways from the first Jan. 6 hearing</h6>
                </div>
                <div className="col-lg-1 bg-secondary d-flex align-items-center justify-content-end gap-1">
                    <SlArrowLeft className="bg-white fs-3 text-muted" />
                    <SlArrowRight className="bg-white fs-3 text-muted" />
                </div>
            </Row>
        </Container>
    )

}