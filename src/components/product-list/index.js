import React, { Component } from "react";
import "./index.css";

export default class ProductList extends Component {
  constructor(props) {
    super();
  }
  addTOCart = (product) => {
    console.log(product);
  };
  render() {
    return (
      <div className="layout-row wrap justify-content-center flex-70 app-product-list">
        {this.props.products.map((product, i) => {
          return (
            <section
              className="w-30"
              data-testid={"product-item-" + i}
              key={product.id}
            >
              <div className="card ma-16">
                <img
                  alt="Your Cart"
                  src={product.image}
                  className="d-inline-block align-top product-image"
                />
                <div className="card-text pa-4">
                  <h5 className="ma-0 text-center">{product.name}</h5>
                  <p className="ma-0 mt-8 text-center">${product.price}</p>
                </div>
                <div className="card-actions justify-content-center pa-4">
                  {product.cartQuantity === 0?<button
                    className="x-small outlined"
                    data-testid="btn-item-add"
                    onClick={() =>
                      this.props.onProductQuantityChange(product,UpdateMode.ADD)
                    }
                  >
                    Add To Cart
                  </button>:null}

                  {product.cartQuantity !== 0 ?<div className="layout-row justify-content-between align-items-center">
                    <button
                      className="x-small icon-only outlined"
                      data-testid="btn-quantity-subtract"
                      onClick = {()=>this.props.onProductQuantityChange(product,UpdateMode.SUBTRACT)}
                    >
                      <i className="material-icons">remove</i>
                    </button>

                    <input
                      type="number"
                      disabled
                      className="cart-quantity"
                      value={product.cartQuantity}
                      data-testid="cart-quantity"
                    />

                    <button
                      className="x-small icon-only outlined"
                      data-testid="btn-quantity-add"
                      onClick={() =>
                        this.props.onProductQuantityChange(product, UpdateMode.ADD)
                      }
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </div>:null}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}

export const UpdateMode = {
  ADD: 1,
  SUBTRACT: 0,
};
