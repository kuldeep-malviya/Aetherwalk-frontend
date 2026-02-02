import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import ProductRating from "./Rating";
import { Link } from "react-router-dom";
import { addToCart } from "../api/cartApi";
import { getProducts } from "../api/productApi";

const Products = ({ setCartAnime }) => {
  const [productsList, setProducts] = useState([]);

  const loadProducts = async () => {
        const res = await getProducts();
    if (res.data && res.data.data) {
      setProducts(res.data.data);
    } else {
      setProducts([]); // fallback to empty array
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="products_list">
      <div className="container">
        <div className="row">
          <h1 className="heading_products">Find Your Perfect Pair</h1>

          {productsList.slice(0, 9).map((item) => (
            <div key={item._id} className="col-md-4">
              <div className="products">
                <img src={`${import.meta.env.VITE_API_URL}/uploads/${item.imagesUrl}`}alt={item.imagesUrl} className="img-fluid" />

                <div className="product_name">
                  <h4>{item.name}</h4>
                  <h5>&#8377; {item.Price}/-</h5>

                  <p>
                    "Comfortable and versatile sport shoes designed for everyday
                    wear and athletic activities."
                  </p>

                  <ProductRating />
                  <p className="text-start my-2">{item.reviews ||  Math.floor(Math.random() * 900) + 100
} Reviews</p>

                  <div className="d-flex">
                    <button
                      onClick={() => {
                        addToCart(item._id);
                        
                      }}
                    >
                      Add to Cart <FaCartPlus className="ms-2" />
                    </button>

                    <button>
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/cart/checkout"
                      >
                        Buy Now <FaCartPlus className="ms-2" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link className="view_all" to="/products">
          view All Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
