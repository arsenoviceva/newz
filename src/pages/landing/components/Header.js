import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logo from '../../../images/news-logo-2.png';
import { LiaCalendarAlt } from "react-icons/lia";
import { LiaCloudSunSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";








export const Header = () => {
    return (
        <Container className="bg-white py-3 mx-auto" >
            <Row className='d-flex align-items-center '>

                <div className="col-lg-8">
                    <div className='row d-flex  align-items-center'>

                        <div className="col-lg-4 m-0 p-0 ">
                            <img className="img-fluid m-o p-0" src={Logo} />
                        </div>

                        <div className='col-lg-3 d-flex gap-3'>
                            <LiaCalendarAlt className="fs-2" />
                            <ul className="list-unstyled m-0">
                                <li>
                                    <h6 className="fw-bold text-black" > Monday</h6>
                                    <h6 className="text-muted"> Nov 25, 2023</h6>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 d-flex gap-3'>
                            <LiaCloudSunSolid className="fs-2" />
                            <ul className="list-unstyled m-0">
                                <li>
                                    <h6 className="fw-bold text-black" > 32<sup>o</sup>C, Cloudy</h6>
                                    <h6 className="text-muted"> New York</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className='row d-flex align-items-center'>

                        <div className="col-lg-5">
                            <div className=" d-flex gap-2">
                                <LiaEnvelopeSolid className="fs-2" />
                                <h5 className="my-1"> SUBSCRIBE</h5>
                            </div>
                            <hr className="opacity-100 m-auto" />
                        </div>

                        <div className="col-auto d-flex ms-4">
                            <LiaUserSolid className="fs-2" />
                        </div>
                        <div className="col-auto d-flex gap-3 border-end border-dark ms-1">

                            <div className="position-relative">
                                <LiaShoppingBagSolid className="fs-2" />
                                <div
                                    className='top-right-icon'
                                />
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <LiaSearchSolid className="fs-2 ms-3" />
                        </div>
                    </div>

                </div>
            </Row>


        </Container>

    )
}