import '../component/order.scss'
import { FaRegCircle } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

function Order() {
    return(
        <div className='order-summary'>
            <h3>Summary of Order</h3>
            <div className='product'>
                <div>
                    <h4>PRODUCT:</h4>
                    <h4>QUANTITY:</h4>
                    <h4>COST OF TOTAL ORDER:</h4>
                </div>
                <div>
                    <p>ADIDAS Originals Sneakers Stan Smith Bold Women</p>
                    <p>1 qts</p>
                    <h4><FaNairaSign />126,000</h4>
                </div>
            </div>
            <hr/>
            <p>Choose Preferred Payment Method</p>
            <div>
                <div className='payment'>
                    <FaRegCircle className='circle'/>
                    <p>Pay with Bank Transfer/USSD</p>
                </div>
                <div className='payment'>
                    <FaRegDotCircle className='circle'/> 
                    <p>Pay with Card</p>
                </div>
                <div className='payment'>
                    <FaRegCircle  className='circle'/>
                    <p>Pay with Bank Transfer/USSD</p>
                </div>
            </div>
           <button className='payy'>PAY</button>
        </div>
    );
}
export default Order;