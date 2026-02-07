import API from "./api";
import { toast } from "react-toastify";

export const addToCart = async (productId) => {
  const res = await API.post("/cart/add", { productId });
  toast.success("Item added to cart");
  return res.data;
};

export const getCart = async () => {
  const res = await API.get("/cart");
  return res.data;
};

export const increaseQty = async (cartId) => {
  const res = await API.put(`/cart/increase/${cartId}`);
  return res.data;
};

export const decreaseQty = async (cartId) => {
  const res = await API.put(`/cart/decrease/${cartId}`);
  return res.data;
};

export const removeItem = async (cartId) => {
  const res = await API.delete(`/cart/${cartId}`);
  toast.success("Item removed");
  return res.data;
};
