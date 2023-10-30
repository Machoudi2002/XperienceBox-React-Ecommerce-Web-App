import { NavLink } from 'react-router-dom'
import navLogo from "../assets/Logos/1.png"
import cart from "../assets/icons/cart.png"
import account from "../assets/icons/account.png"
import './CSS/Navbar.scss'


const Navbar = () => {


  return (
    <>
        <div className='navbar-body'>
          <nav className='container nav-main'>
                <div className='nav1'>
                  <NavLink to="/"><img src={navLogo} alt="logo" width="60px" className='logo' /></NavLink>
                  <NavLink to="/Products" className="products-link">Products</NavLink>
                </div>
                <div className="nav2">
                  <NavLink to="/Account"><img src={account} alt="cart" /></NavLink>
                  <NavLink to="/Cart"><img src={cart} alt="cart" /></NavLink>
                </div>
          </nav>
        </div>
    </>
  )
}

export default Navbar