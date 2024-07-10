import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "./Asset/Frame 5.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../component/nav.scss";

function Nav() {
  return (
    <div>
      <nav>
        <ul className="logo">
          <li>
            <img src={logo} alt="Logo" />
          </li>
        </ul>
        <ul className="categories-search">
          <li className="categories">
            <li>Categories</li>
            <a href="#dropdown">
              <RiArrowDropDownLine className="dropdown" />
            </a>
          </li>
          <li>
            <button className="search">
              <CiSearch className="cisearch" />
              <p>Search for your favorite brands here</p>
            </button>
          </li>
        </ul>
        <ul className="account-cart">
          <li className="account">
            <IoPersonOutline />
            <li>Account</li>
            <RiArrowDropDownLine className="dropdown" />
          </li>
          <li className="cart">
            <MdOutlineShoppingCart />
            <li><a href='/cart'>Cart</a></li>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
