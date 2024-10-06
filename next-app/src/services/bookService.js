import axios from "axios";

const API_URL = "http://localhost:8000/api/books";

export const getBooks = async () => {
  return await axios.get(API_URL);
};

export const getBook = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createBook = async (book) => {
  return await axios.post(API_URL, book);
};

export const updateBook = async (id, book) => {
  return await axios.put(`${API_URL}/${id}`, book);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
