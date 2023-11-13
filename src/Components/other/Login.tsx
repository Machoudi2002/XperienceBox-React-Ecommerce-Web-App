import { Link } from "react-router-dom"
import "./SCSS/LoginRegister.scss"

const Login = () => {
  return (
    <div className="container spacing">
     <div className="login-register">
        <h1>Customer Login</h1>
        <p>If you have an account, sign in with your email address.</p>
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" required/>
            </div>
            <input type="submit" value="Sign in" />
        </form>
        <Link to="/Account/Register"><button>Create New Account</button></Link>
        
        <span>Forgot Your Password?</span><br />
     </div>
    </div>
  )
}

export default Login