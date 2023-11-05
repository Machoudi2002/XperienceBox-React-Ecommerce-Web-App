import ProductCard from "./ProductCard"
import "./SCSS/ProductSection.scss"
import blueFlame from "../assets/Products_Images/BlueFlame.webp"
import choesKnights from "../assets/Products_Images/ChoesKnight.webp"
import bloodDragon from "../assets/Products_Images/BloodDragon.webp"
import cyberPlague from "../assets/Products_Images/CyberPlague.webp"

const productInfo = [
    {
        id: 1,
        name: "BlueFlame",
        price: 189,
        imgURL: blueFlame
    },
    {
        id: 2,
        name: "ChoesKnight",
        price: 129,
        imgURL: choesKnights
    },    
    {
        id: 3,
        name: "BloodDragon",
        price: 299,
        imgURL: bloodDragon
    },    
    {
        id: 4,
        name: "CyberPlague",
        price: 99,
        imgURL: cyberPlague
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
                        <ProductCard key={i} name={item.name} price={item.price} imgURL={item.imgURL} id={item.id} />
                        
                    ))
                }

            </div>


        </section>
    </>
  )
}

export default ProductSection