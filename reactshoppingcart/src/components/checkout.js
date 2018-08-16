import React, { Component } from 'react';

export default class Checkout extends Component {
  render() {
    return (
      <div className="container" id="checkout-container">
          <div className="col-lg-3">
            <div>
              <p>Need help or have quetions?</p>
              <p>Call Customer Service at:</p>
              <p>1800 234 2134</p>

            </div>
          </div>

          <div className="container col-lg-9">


            <div className="row justify-content-between">
              <div className="col-md-5">
                <p>ENTER PROMO CODE OR GIFTCARD</p>
              </div>


              <div className="col-md-5" id="promo-code">
                <form onSubmit={this.onFormSubmit} className="input-group">
                        <input
                          placeholder="Enter Promo Code"
                          className="form-control"
                          onChange={this.onInputChange}
                         />
                        <span className="input-group-btn">
                          <button type="submit" className="btn btn-secondary"> APPLY </button>
                        </span>
                </form>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p>Subtotal</p>
              </div>
              <div className="col-4">
                $10
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p>Promotion Code Applied</p>
              </div>
              <div className="col-4">
                DASDQW
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p>Estimated Shipping</p>
              </div>
              <div className="col-4">
                Free
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p>Estimated Total</p>
              </div>
              <div className="col-4">
                $10
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-4">
              </div>
              <div className="col-md-7">
                <span className="input-group-btn" id="checkout-btn">
                  <button type="submit" className="btn btn-primary"> Checkout </button>
                </span>
              </div>
            </div>
          </div>

      </div>
    )
  }
}
