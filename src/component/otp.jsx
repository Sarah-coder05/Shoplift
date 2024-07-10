import Nav from "./nav"
import '../component/otp.scss'
import { TbMinusVertical } from "react-icons/tb";


function Otp() {
    return(
        <div>
            <Nav />
            <div >
                <h4 className="payment">PAYMENT GATEWAY</h4>
                <div className="confirmation">
                    <h3>OTP CONFIRMATION</h3>
                    <p>A 5 digit has been sent to the number **789. Kindly confirm and input the code below</p>
                    <div className="otpcode">
                        <p className="number">3</p>
                        <p className="number">1</p>
                        <p className="number">0</p>
                        <p className="number"><TbMinusVertical /></p>
                        <p className="number"> </p>
                    </div>
                    <button className="otpbutton"><a href="/">CONFIRM OTP</a></button>
                </div>
                
            </div>
        </div>
    )
};
export default Otp