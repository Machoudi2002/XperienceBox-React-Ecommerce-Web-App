import { NavLink } from 'react-router-dom'
import navLogo from "../assets/Logos/1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import './CSS/Navbar.scss'


const Navbar = () => {


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
                  <NavLink to="/Cart"><FontAwesomeIcon className='nav-icon' icon={faCartShopping} /></NavLink>
                </div>
          </nav>
        </div>
    </>
  )
}

export default Navbar