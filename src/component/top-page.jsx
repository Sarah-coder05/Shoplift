// import React from "react";
import '../component/TopPage.scss'
import shoe1 from './Asset/Rectangle 2.png'
import shoe2 from './Asset/Rectangle 2 (1).png'
import shoe3 from './Asset/shoe two.png'
import shoe4 from './Asset/shoe one.png'
import shoe5 from './Asset/Rectangle 2 (2).png'
import blackshoe from './Asset/1-removebg-preview 1.png'
import { HiFire } from "react-icons/hi";
import { FaNairaSign } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import shoe6 from './Asset/Rectangle 3.png';
import shoe7 from './Asset/Rectangle 3 (1).png';
import shoe8 from './Asset/Rectangle 3 (2).png';
import shoe9 from './Asset/Rectangle 3 (3).png';
import bigshoe from './Asset/bigshoe.png'
import bigheels from './Asset/bigheels.png'
import Nav from './nav';

function TopPage(){
  return (
    <div>
      <Nav />
      <div className='second-top'>
        <h2 className='onestop'>Your ONE-STOP-SHOP for<br/> all you <span className='shoes'>Shoes</span> and <span className='sneakers'>Sneakers</span></h2>
        <img src={blackshoe} alt='backshoe'/>
      </div>
      <div className='hot-deal'>
        <h1>HOT DEALS <HiFire  className='hot'/><HiFire className='hot'/><HiFire className='hot'/></h1>
        <div className='hot-deals'>
            <div className='deals'>
            
              <img src={shoe3} alt='shoe-1'/>
              <a href='/product'>
                <p>2024 Mizuno <br/>Creation Wave</p>
                <p><FaNairaSign />72,000</p>
              </a>
              <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
              
            </div>
            <div className='deals'>
                <img src={shoe4} alt='shoe-1'/>
                <p>Air Max 02</p>
                <p><FaNairaSign />59,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
            </div>
            <div className='deals'>
                <img src={shoe1} alt='shoe-1'/>
                <p>2023 Nike Wave <br/>04</p>
                <p><FaNairaSign />29,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
            </div>
            <div className='deals'>
                <img src={shoe2} alt='shoe-1'/>
                <p>Casual Thick <br/>Slide</p>
                <p><FaNairaSign />44,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
            </div>
            <div className='deals'>
                <img src={shoe5} alt='shoe-1'/>
                <p>Ladies Work <br/>Shoe</p>
                <p><FaNairaSign />18,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /></p>
            </div>
        </div>
      </div>
      <div>
        <h1>Shop from Our Collection</h1>
        <div className='collections'>
            <div>
                <img src={shoe6} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />25,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /> (112)</p>

            </div>
            <div>
                <img src={bigshoe} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />33,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> (112)</p>

            </div>
            <div>
                <img src={shoe7} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />100,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline /> (112)</p>

            </div>
            <div>
                <img src={shoe8} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />125,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /> (72)</p>

            </div>
            <div>
                <img src={shoe9} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />215,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /> (52)</p>

            </div>
            <div>
                <img src={bigheels} alt='shoe'/>
                <p>ADIDAS Originals<br/>Sneakers Stan Smith Bold Women</p>
                <p><FaNairaSign />85,000</p>
                <p><IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline /> (22)</p>

            </div>
        </div>
      </div>
    </div>
  );
};
export default TopPage;
