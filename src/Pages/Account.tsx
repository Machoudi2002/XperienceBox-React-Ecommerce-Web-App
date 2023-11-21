
import UserAccount from "../Components/other/UserAccount"
import Orders from "../Components/other/Orders"


const Account = () => {

  return (
    <div className="container spacing pageName">

       <h1>Account</h1>
       <hr />
       <UserAccount />
       <Orders />

    </div>
  )
}

export default Account