import axios from "axios";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Add item to cart
export const addToCart = async (productId) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/cart/add`,
    {
      productId,
      quantity: 1,
    },
    getAuthHeader()
  );
};

// Get cart
export const getCart = async () => {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/cart`,
    getAuthHeader()
  );
};

export const increaseQty = async (cartId) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/cart/increase/${cartId}`,
    {},
    getAuthHeader()
  );
};

export const decreaseQty = async (cartId) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/cart/decrease/${cartId}`,
    {},
    getAuthHeader()
  );
};

export const removeItem = async (cartId) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_URL}/cart/${cartId}`,
    getAuthHeader()
  );
};
