import { Link } from "react-router-dom"




const Account = () => {

  return (
    <div className="container spacing">

       <h1>Account page</h1> 
       <Link to="/Account/Login">Login</Link>

    </div>
  )
}

export default Account