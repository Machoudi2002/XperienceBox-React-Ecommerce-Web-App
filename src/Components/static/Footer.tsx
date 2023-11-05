import { Link } from "react-router-dom";
import "./SCSS/Footer.scss";
import facebook from "../assets/icons/facebook.svg";
import twitch from "../assets/icons/twitch.svg";
import twitterX from "../assets/icons/twitterX.svg";
import footerLogo from "../assets/Logos/3.png"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container pt-5 footer-body">
                <img src={footerLogo} alt="footer-logo" />
                <div className="links">
                  <h3>Company</h3>
                  <ul>
                    <li><Link to=''>About</Link></li>
                    <li><Link to='/TermsOfService'>Terms of Service</Link></li>
                    <li><Link to='/PrivacyPolicy'>Privacy Policy</Link></li>
                  </ul>
                </div>
                <div className="links">
                  <h3>Support</h3>
                  <ul>
                    <li><Link to='/ContactUs'>Contact Us</Link></li>
                    <li><Link to='/Account'>My Account</Link></li>
                    <li><a target="_blank" href="https://www.ordertracker.com/">Track My Order</a></li>
                  </ul>
                </div>
                <div className="newsLetter">
                  <h3>Newsletter</h3>
                  <form>
                    <input type="email" placeholder="Email" required/>
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
            </div>
            <div className="social-buttons">
                    <a target="_blank" href="https://web.facebook.com/CControllerzz/"><img src={facebook} alt="facebook" /></a>
                    <a target="_blank" href="https://www.youtube.com/customcontrollerzz"><img src={twitch} alt="twitch" /></a> 
                    <a target="_blank" href="https://twitter.com/ccontrollerzz"><img src={twitterX} alt="twitterX" /></a>
                    
            </div>
            <div className="copyright">
            Copyright © 2023 Xperience, Inc. All Rights Reserved.
            </div>
        </footer>
    </>
  )
}

export default Footer