import axios from "axios";

export default {
  getBook: function (id) {
    return axios.get(`/api/books/${id}`);
  },

  getAllBooks: function () {
    return axios.get("/api/books");
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
