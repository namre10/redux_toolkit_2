import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, removeItems, add } from "../CartSlice/CartSlice";

const Cart = () => {
  const list = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeItems(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product.id));
  };

  const handleAddCart = (product) => {
    dispatch(add(product));
  };

  let subTotal = 0;
  list.cartItems.forEach((pd) => {
    subTotal += pd.price * pd.cartQuantity;
  });

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          Selected Items: {list.cartItems.length}
        </h3>

        <div className="container">
          <div className="row">
            <div className="col col-8">
              <div className="row">
                {list.cartItems.map((product) => (
                  <div className="col">
                    {" "}
                    <div className="card  my-2" style={{ width: "18rem" }}>
                      <img
                        src={product.image}
                        className="card-img-top ps-5"
                        alt=""
                        style={{
                          height: "15rem",
                          width: "14rem",
                        }}
                      />
                      <div className="card-body">
                        <h5>{product.title.slice(0, 20)}....</h5>
                        <center>
                          <span>${product.price}</span> <br />
                          <span>{product.category}</span>
                          <br />
                          <button onClick={() => handleDecreaseCart(product)}>
                            -
                          </button>
                          <span>Quantity: {product.cartQuantity}</span>
                          <button onClick={() => handleAddCart(product)}>
                            +
                          </button>
                        </center>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col col-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {list.cartItems.map((product, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>{product.cartQuantity}</td>
                      <td>${product.price * product.cartQuantity} </td>
                    </tr>
                  ))}
                  <tr>
                    <td>Subtotal:</td>
                    <td></td>
                    <td></td>
                    <td>{subTotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
