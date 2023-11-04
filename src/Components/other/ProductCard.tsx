import CartIcon from "../assets/icons/cart.png"

interface ProductCard {
    name: string;
    price: number;
    imgURL: string;
}

const ProductCard = (props : ProductCard) => {
  return (
    <>
    <div className="product-card">
        <div className="product-img">
            <img src={props.imgURL} alt={props.name} width="100%" />
            <div className="content">
              <img src={CartIcon} alt="cart" />
            </div>
        </div>
        <h2>{props.name}</h2>
        <span>{props.price}$</span>
    </div>
    </>
  )
}

export default ProductCard