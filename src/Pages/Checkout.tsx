import CheckoutTotal from "../Components/other/CheckoutTotal"
import ShippingForm from "../Components/other/ShippingForm"


const Checkout = () => {
    
  return (
    <>
        <div className="container spacing pageName">
            <h1>Checkout</h1>
            <hr />
            <div className="flex">
              <CheckoutTotal />
              <ShippingForm />
            </div>
        </div>
    </>
  )
}

export default Checkout