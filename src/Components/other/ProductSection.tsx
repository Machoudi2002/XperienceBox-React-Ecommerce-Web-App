import Product from "./Product"
import "./CSS/ProductSection.scss"

const productInfo = [
    {
        name: "BlueFlame Instinct",
        price: 199,
        imgURL: "/assets/Products_Images/BlueFlame.webp"
    },
    {
        name: "BlueFlame Instinct",
        price: 199,
        imgURL: "/assets/Products_Images/BlueFlame.webp"
    },    {
        name: "BlueFlame Instinct",
        price: 199,
        imgURL: "/assets/Products_Images/BlueFlame.webp"
    },    {
        name: "BlueFlame Instinct",
        price: 199,
        imgURL: "/assets/Products_Images/BlueFlame.webp"
    },
]

const ProductSection = () => {
  return (
    <>
        <section className="product-section container">
            <h1>Featured Products</h1>
            <div className="products mt-5 mb-5">
                {
                    productInfo.map((item, i) => (
                        <Product key={i} name={item.name} price={item.price} imgURL={item.imgURL} />
                        
                    ))
                }
                                {
                    productInfo.map((item, i) => (
                        <Product key={i} name={item.name} price={item.price} imgURL={item.imgURL} />
                        
                    ))
                }

            </div>


        </section>
    </>
  )
}

export default ProductSection