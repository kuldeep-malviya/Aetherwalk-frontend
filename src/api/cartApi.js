import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

const authHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// Add item to cart
export const addToCart = async (productId) => {
 const res =   await axios.post(`${import.meta.env.VITE_API_URL}/cart/add`, {
    productId,
    quantity: 1,
    
  },
authHeader);
if(res.status === 200){
  toast.success("item successfully add in cart")
}
return res
};

// Existing functions
export const getCart = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
    authHeader,
  );
};

export const increaseQty = async (cartId) => {
  return await axios.put(`${import.meta.env.VITE_API_URL}/cart/increase/${cartId}`,
    {},
    authHeader,
  );
};

export const decreaseQty = async (cartId) => {
  return await axios.put(`${import.meta.env.VITE_API_URL}/cart/decrease/${cartId}`,
     {},
    authHeader,
  );
};

export const removeItem = async (cartId) => {
  return await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${cartId}`,
    authHeader
  );
};
