import "./CSS/Services.scss"

const services = [
  {
    title: "Shipping",
    description: "Your order is prepared and delivered to your address",
    iconURL: "/icons/shipping.png"
  },
  {
    title: "Payment",
    description: "the Payment methods that we offer are completely secure",
    iconURL: "/icons/payment.png"
  },
  {
    title: "Satisfaction",
    description: "We make sure that you are satisfied with our products",
    iconURL: "/icons/satisfaction.png"
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