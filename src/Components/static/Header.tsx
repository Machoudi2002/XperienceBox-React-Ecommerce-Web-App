


interface headerComp {
  heading1: string,
  heading2: string,
  paragraph: string,
  imgURL: string

}

const Header = (props : headerComp) => {
  return (
    <>
        <header className="container">
            <div className="text-area">
                <h2>{props.heading2}</h2>
                <h1>{props.heading1}</h1>
                <p>{props.paragraph}</p>
                <div className="link-btn">
                  <a href="#">Shop Now</a>
                </div>
                
            </div>
            <div className="image-area">
                <img src={props.imgURL} width="100%" />
            </div>
        </header>
    </>
  )
}

export default Header