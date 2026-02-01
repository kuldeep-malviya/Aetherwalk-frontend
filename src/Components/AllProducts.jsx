import React, { useEffect, useState } from "react";
import { addToCart } from "../api/cartApi";
import { toast } from "react-toastify";
import { FcApproval } from "react-icons/fc";
import axios from "axios"
import ProductRating from "./Rating";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const loadProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      const data = res.data

      setProducts(data.data);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Handle Add to Cart
  const handleAddToCart = async (product) => {
    try {
      await addToCart(product._id); // call backend API
      toast.success(
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <FcApproval /> {product.title} added to cart!
        </div>
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="products_container " style={{margin:"90px"}}>
       <div className="row">
                <h1 className="heading_products">Find Your Perfect Pair</h1>
              {products.map((product)=>(
      
              <div key={product.id} className="col-md-4">
                  <div className="products">
                   <img src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagesUrl}`}alt={product.imagesUrl} className="img-fluid" />
                    <div className="product_name">
                      <h4>{product.name}</h4>
                      <h5>&#8377; {product.Price}/-</h5>
                      
                      <p>"Comfortable and versatile sport shoes designed for everyday wear and athletic activities."</p>
                      <ProductRating/>
                      <p className="text-start my-2">{product.reviews ||  Math.floor(Math.random() * 900) + 100
} Reviews</p>
                      <div className="d-flex ">
                      <button onClick={()=>addToCart(product._id)}>Add to Cart <FaCartPlus className="ms-2" /></button>
                      <button >
                        <Link className="text-decoration-none text-secondary" to={"/cart/checkout"}>
                        Buy Now <FaCartPlus className="ms-2" />
                        </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
      
      {/* {products.map((product) => (
        <div className="product_card" key={product._id}>
          <img src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagesUrl}`}alt={product.imagesUrl} />
          <h3>{product.name}</h3>
          <p>₹{product.Price}</p>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default AllProducts;
