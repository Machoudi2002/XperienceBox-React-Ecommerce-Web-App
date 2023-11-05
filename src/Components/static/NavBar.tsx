import { NavLink } from 'react-router-dom'
import navLogo from "../assets/Logos/1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import './SCSS/Navbar.scss'
import { useShoppingCart } from '../../Context/ShoppingCartContext'


const Navbar = () => {

  const { cartQuantity } = useShoppingCart()

  return (
    <>
        <div className='navbar-body'>
          <nav className='container nav-main'>
                <div className='nav1'>
                  <NavLink to="/"><img src={navLogo} alt="logo" width="60px" className='logo' /></NavLink>
                  <NavLink to="/Products" className="products-link">Browse All</NavLink>
                </div>
                <div className="nav2">
                  <NavLink to="/Account"><FontAwesomeIcon className='nav-icon' icon={faUser} /></NavLink>
                  <NavLink to="/Cart" className="cart">
                    <FontAwesomeIcon className='nav-icon' icon={faCartShopping} /> 
                    {
                      cartQuantity > 0 && <span className='cartItemsNum'>{cartQuantity}</span>
                    }
                  </NavLink>
                </div>
          </nav>
        </div>
    </>
  )
}

export default Navbar