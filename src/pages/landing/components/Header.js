import Logo from '../../../images/logo.png';
import { LiaCalendarAlt } from "react-icons/lia";



export const Header = () => {
    return (
        <div className="container bg-white  d-flex justify-content-between py-3">
            <div className='row d-flex justify-content-between'>
                <div className="col-lg-6">
                    <div className='row d-flex justify-content-between'>
                        <div className="col-lg-6 m-0 p-0 ">
                            <img className="img-fluid m-o p-0" src={Logo} />

                        </div>
                        <div className='col-lg-2'>
                            <LiaCalendarAlt className="fs-1" />


                        </div>



                    </div>
                </div>
                <div className="col-lg-6">


                </div>
            </div>


        </div>

    )
}