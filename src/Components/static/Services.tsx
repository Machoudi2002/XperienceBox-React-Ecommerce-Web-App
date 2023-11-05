import "./SCSS/Services.scss"
import shipping from "../assets/icons/shipping.png"
import payment from "../assets/icons/payment.png"
import satisfaction from "../assets/icons/satisfaction.png"

const services = [
  {
    title: "Shipping",
    description: "Your order is prepared and delivered to your address",
    iconURL: shipping
  },
  {
    title: "Payment",
    description: "the Payment methods that we offer are completely secure",
    iconURL: payment
  },
  {
    title: "Satisfaction",
    description: "We make sure that you are satisfied with our products",
    iconURL: satisfaction
  },
]


const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container services-container">
          {
            services.map((service, i) => (
              <div key={i} className="service">
                <img src={service.iconURL} alt={service.title} />
                <div className="text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    
    </>
  )
}

export default Services