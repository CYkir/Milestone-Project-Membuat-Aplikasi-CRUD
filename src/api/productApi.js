import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const getProducts = () => axios.get(`${API_URL}/products`);
const createProduct = (data) => axios.post(`${API_URL}/products`, data);
const updateProduct = (id, data) =>
  axios.put(`${API_URL}/products/${id}`, data);
const deleteProducts = (id) => axios.delete(`${API_URL}/products/${id}`);

export { getProducts, createProduct, updateProduct, deleteProducts };
