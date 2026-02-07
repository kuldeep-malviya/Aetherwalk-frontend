import axios from "axios";
import { toast } from "react-toastify";

// Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Always get fresh token
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// 🔴 Central error handler
const handleError = (error, defaultMessage) => {
  const message =
    error.response?.data?.message || defaultMessage || "Something went wrong";
  toast.error(message);
  throw error;
};

// 🛒 Add item to cart
export const addToCart = async (productId) => {
  try {
    const res = await api.post(
      "/cart/add",
      { productId },
      authHeader()
    );
    toast.success("Item added to cart");
    return res.data;
  } catch (error) {
    handleError(error, "Failed to add item to cart");
  }
};

// 📦 Get user cart
export const getCart = async () => {
  try {
    const res = await api.get("/cart", authHeader());
    return res.data;
  } catch (error) {
    handleError(error, "Failed to load cart");
  }
};

// ➕ Increase quantity
export const increaseQty = async (cartId) => {
  try {
    const res = await api.put(
      `/cart/increase/${cartId}`,
      {},
      authHeader()
    );
    return res.data;
  } catch (error) {
    handleError(error, "Failed to increase quantity");
  }
};

// ➖ Decrease quantity
export const decreaseQty = async (cartId) => {
  try {
    const res = await api.put(
      `/cart/decrease/${cartId}`,
      {},
      authHeader()
    );
    return res.data;
  } catch (error) {
    handleError(error, "Failed to decrease quantity");
  }
};

// ❌ Remove item from cart
export const removeItem = async (cartId) => {
  try {
    const res = await api.delete(
      `/cart/${cartId}`,
      authHeader()
    );
    toast.success("Item removed from cart");
    return res.data;
  } catch (error) {
    handleError(error, "Failed to remove item");
  }
};
