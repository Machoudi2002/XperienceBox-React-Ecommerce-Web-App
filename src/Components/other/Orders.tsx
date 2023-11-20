import { Link } from "react-router-dom"
import "./SCSS/Account.scss"

const Orders = () => {
  return (
    <>
        <div className="orders card">
            <h2>Orders</h2>
            {
            /* 
            orders.length > 0 ? order.map(order => (<Orders name={order.name} total={order.total}  />))  
            : (<span>You have no orders</span>)
            */
            }
            <span>You have no orders</span>
        </div>
        <div className="logout">
            <Link to="/Account/Login">Logout</Link>
        </div>
    </>
  )
}

export default Orders