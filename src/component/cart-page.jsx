import '../component/CartPage.scss'
import frame2 from './Asset/Rectangle s5.png';
import frame3 from './Asset/Rectangle s6.png';
import frame4 from './Asset/Rectangle s7.png';
import frame1 from './Asset/Rectangle s4.png';
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";

function CartPage(){
    return(
        <div >
            <h2 className='mycart'>My Cart (1)</h2>
            <div className='ordersummary'>
            <div className='my-cart'>
                <div>
                    <img src={frame1} alt='frame'/>
                    <div className='cartshoe'>
                        <img src={frame4} alt='frame'/>
                        <img src={frame2} alt='frame'/>
                        <img src={frame3} alt='frame'/>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>ADIDAS Originals Sneakers Stan Smith<br/>Bold Women</h3>
                        <p>Brand New Collection<PiLineVerticalLight />15% off with a coupon</p>
                        <hr/>
                    </div>
                    <div className='cart-list'>
                        <h3><FaNairaSign />120,000</h3>
                        <div>
                            <div>
                                <button className='button-one'>-</button>
                                <span>1</span>
                                <button className='button-one'>+</button>
                            </div>
                            <button className='checkout'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order'>
                <h2>ORDER SUMMARY</h2>
                <hr/>
                <div className='summary'>
                    <div>
                        <p>Total Item:</p>
                        <p>Tax:</p>
                        <p>Delivery fee:</p>
                        <h4>TOTAL:</h4>
                        <h4>Address:</h4>
                        <p>7 Abeokuta Street, Bengola Crescent<br/>Abuja Nigeria</p>
                    </div>
                    <div>
                        <p><FaNairaSign />120,000</p>
                        <p><FaNairaSign />1,000</p>
                        <p><FaNairaSign />5,000</p>
                        <h4><FaNairaSign />126,000</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default CartPage