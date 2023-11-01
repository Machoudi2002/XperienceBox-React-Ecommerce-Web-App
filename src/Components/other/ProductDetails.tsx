interface ProductDetails {
    name: string;
    description: string;
    price: number;
    imgURL: string;

}


const ProductDetails = (props : ProductDetails) => {
  return (
    <>
        <div className="container">
            <div className="img-area">
                <img src={props.imgURL} alt={props.name} />
            </div>
            <div className="text-area">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <span>{props.price}</span>
            </div>
        </div>
    </>
  )
}

export default ProductDetails