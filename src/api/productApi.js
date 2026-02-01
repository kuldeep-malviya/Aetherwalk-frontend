import API from "./axios";

// get all products
export const getProducts = () => API.get("/products");

// add product (admin / testing)
export const addProduct = (data) => API.post("/products", data);

// delete product
export const deleteProduct = (id) => API.delete(`/products/${id}`);
