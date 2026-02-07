import React, { useEffect, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import CartMessage from "./CartMessage";
import "./cart.css"


import {
  getCart,
  increaseQty,
  decreaseQty,
  removeItem
} from "../api/cartApi";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await getCart();
    setCart(res);
  };

  const validCart = cart.filter(item => item.productId);
  const total = validCart.reduce(
    (sum, item) => sum + item.productId.Price * item.quantity,
    0
  );
  useEffect(() => {
    loadCart();
  }, []);


  return (
    <div className="text-center mt-5 " >
      <div className="cart_main">

        {validCart.length === 0 ? <CartMessage />
          : (
            <div className="cart">
              <h1>Cart</h1>

              <div className="productlist">
                {validCart.map((item) => (
                  <div className="product" key={item._id}>

                    <img
                      src={`${import.meta.env.VITE_API_URL}/uploads/${item.productId.imagesUrl}`}
                      alt={item.productId.name}
                    />

                    <div className="cart_imgSection">
                      <h4>{item.productId.name}</h4>
                    </div>

                    <h4>₹{item.productId.Price}</h4>

                    <div className="quantitys">
                      <h4>{item.quantity}</h4>
                    </div>

                    <div className="cart_handler">
                      <button
                        className="mx-2"
                        onClick={() => increaseQty(item._id).then(loadCart)}
                      >
                        +
                      </button>

                      <button
                        className="mx-2"
                        onClick={() => decreaseQty(item._id).then(loadCart)}
                      >
                        -
                      </button>

                      <button
                        className="mx-2"
                        onClick={() => removeItem(item._id).then(loadCart)}
                      >
                        <MdRemoveShoppingCart />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
      </div>

      <h3 className="Total">
        Total : ₹{total}
      </h3>

      <div className="checkoutBTN">
        <Link to="/cart/checkout" className="checkout">
          process to checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
