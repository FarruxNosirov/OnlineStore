import React from "react";
import "./Checkout.css";
import Checkout_list from "./CheckoutList/Checkout_list";
const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout_item1">
          <div className="form1">
            <h1>Billing details</h1>
            <form>
              <label htmlFor="last_name">First & last name</label>
              <input type="text" id="last_name" placeholder="i-e. John Smith" />
              <label htmlFor="email">Email address</label>
              <input
                type={"email"}
                id={"email"}
                placeholder="i-e. johnsmith@gmail.com"
              />
              <label htmlFor="Address">Address</label>
              <input type="text" id="Address" placeholder="First line" />
              <input type="text" placeholder="Second line" />
            </form>
          </div>
          <div className="form2">
            <h1>Payment method</h1>
            <div className="Input">
              <div className="input_icon">
                <input type="radio" />
                <p>Credit Card</p>
              </div>
              <div className="input_mony">
                <div>
                  <img src="/FooterImgs/Mastercard.png" />
                </div>
                <div>
                  <img src="/FooterImgs/visa-logo.png" />
                </div>
                <div>
                  <img src="/FooterImgs/UnionPay.png" />
                </div>
                <div>
                  <img src="/FooterImgs/GooglePay.png" />
                </div>
                <div>
                  <img src="/FooterImgs/ApplePay.png" />
                </div>
              </div>
            </div>
            <form>
              <label htmlFor="Card number">Card number</label>
              <input type="text" placeholder="i.e. 4123 4567 123 9819" />
            </form>
            <form className="form_flexs">
              <label htmlFor="data">
                Expiration Date <input type="text" placeholder="Month" />
              </label>
              <label>
                <input type="text" placeholder="year" />
              </label>

              <label htmlFor="Security code">
                Security code <input type="text" placeholder="Three digits" />
              </label>
            </form>
            <div className="Input action ">
              <div className="input_icon">
                <input type="radio" />
                <p>Credit Card</p>
              </div>
              <div className="input_mony">
                <img src="/FooterImgs/pngaaa 1.png" />
              </div>
            </div>
            <p className="form_text">
              By clicking the button, you agree to the Terms and Conditions
            </p>
            <button>Place order</button>
          </div>
        </div>
        <div className="Checkout_item2">
          <Checkout_list/> 
        </div>
      </div>
    </div>
  );
};

export default Checkout;
