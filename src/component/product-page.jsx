import frame1 from './Asset/Rectangle 4.png';
import frame2 from './Asset/Rectangle 5.png';
import frame3 from './Asset/Rectangle 6.png';
import frame4 from './Asset/Rectangle 7.png';
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import '../component/ProductPage.scss'
import { IoStarOutline } from "react-icons/io5";
import Nav from './nav';

function ProductPage() {
    return(
        <div>
            <Nav />
            <div className='carts'>
                <div className='cartshoe'>
                    <img src={frame4} alt='frame'/>
                    <img src={frame2} alt='frame'/>
                    <img src={frame3} alt='frame'/>
                </div>
                <img src={frame1} alt='frame'/>
                <div>
                    <h3>ADIDAS Originals Sneakers Stan Smith<br/>Bold Women</h3>
                    <p>Brand New Collection<PiLineVerticalLight />15% off with a coupon</p>
                    <hr/>
                    <h3><FaNairaSign />120,000</h3>
                    <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
                    <div className='cartbutton'>
                        <button className='addcart'><a href='/cart'>ADD TO CART</a></button>
                        <button className='buynow'><a href='/order'>BUY NOW</a></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default ProductPage;