import "./SCSS/ShippingForm.scss"

const ShippingForm = () => {

  return (

    <div className="ShippingForm">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <form className="form">
            <div className="fields fields--2">
            <label className="field">
                <span className="field__label">
                First name
                </span>
                <input
                className="field__input"
                type="text"
                id="firstname"
                defaultValue="John"
                />
            </label>
            <label className="field">
                <span className="field__label">
                Last name
                </span>
                <input
                className="field__input"
                type="text"
                id="lastname"
                defaultValue="Doe"
                />
            </label>
            </div>
            <label className="field">
            <span className="field__label">
                Address
            </span>
            <input className="field__input" />
            </label>
            <label className="field">
            <span className="field__label">
                Country
            </span>
            <select className="field__input" id="country">
                <option value="" />
                <option value="unitedstates">United States</option>
            </select>
            </label>
            <div className="fields fields--3">
            <label className="field">
                <span className="field__label" >
                Zip code
                </span>
                <input className="field__input" type="text" id="zipcode" />
            </label>
            <label className="field">
                <span className="field__label" >
                City
                </span>
                <input className="field__input" type="text" id="city" />
            </label>
            <label className="field">
                <span className="field__label" >
                State
                </span>
                <select className="field__input" id="state">
                <option value="" />
                </select>
            </label>
            </div>
            <button className="button">Submit</button>
        </form>
        <hr />
        
    </div>

  )
}

export default ShippingForm