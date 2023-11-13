

import { Link } from "react-router-dom"
import "./SCSS/LoginRegister.scss"

const Register = () => {
  return (
    <div className="container spacing">
     <div className="login-register">
        <h1>Register</h1>
        <p>Create New Account, Enter Your Informations.</p>
        <form>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" required placeholder="UserName"/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" required/>
            </div>
            <input type="submit" value="Register" />
        </form>
        <Link to="/Account/Login"><span>Already have an account?</span></Link>
     </div>
    </div>
  )
}

export default Register