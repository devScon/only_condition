import "./contractcard.css";

export default function ContractCard() {
    return(
        <>
            <div className="contract__card__contianer">
                <div className="contract__card__info">
                    <div className="contract__card__title__container">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, placeat</p>
                    </div>
                    <div className="contract__card__description__container">
                        <h4>Description</h4>
                        <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat esse deleniti, 
                           aspernatur numquam beatae maiores blanditiis dicta omnis consectetur eligendi, odio inve
                           ntore illo! Perspiciatis temporibus officia perferendis optio ex laboriosam! Quia nemo i
                           nventore alias dicta. Atque, impedit. Perferendis quaerat non veniam asperiores natus nesciunt 
                           ducimus tenetur saepe excepturi rerum.
                        </p>
                    </div>
                </div>
                <div className="contract__card__form">
                <form className="contract__card__form__container">
                    <div className="form__group">
                        <label for="strike_price">Strike price</label>
                        <div className="input__group">
                            <input type="text" id="strike_price" placeholder="strike price" />
                            <button type="button">Update</button>
                        </div>
                    </div>
                    <div className="form__group">
                        <label for="volume">Volume</label>
                        <div className="input__group">
                            <input type="text" id="volume" placeholder="volume" />
                            <button type="button">Update</button>
                        </div>
                    </div>
                    <div className="form__group">
                        <label for="duration">Duration</label>
                        <div className="input__group">
                            <input type="text" id="duration" placeholder="duration" />
                            <button type="button">Update</button>
                        </div>
                    </div>
                    <div className="form__group">
                        <label for="payment_terms">Terms of payment</label>
                        <div className="input__group">
                            <input type="text" id="payment_terms" placeholder="Terms of payment" />
                            <button type="button">Update</button>
                        </div>
                    </div>
                </form>
                <div className="contract__card__termination__option">
                    <button className="button__contract__card inactive">Request termination of contract</button>
                </div>
                <div className="contract__card__edit__options">
                    <button className="button__contract__card inactive">Return without editing</button>
                    <button className="button__contract__card active">Proceed for approval</button>
                </div>
                </div>
                
                
            </div>
            
        </>
    )
}