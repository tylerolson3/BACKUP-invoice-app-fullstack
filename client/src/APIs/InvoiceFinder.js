import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3001/api/v1/invoices",
  baseURL: "https://invoice-app-tyler.herokuapp.com/api/v1/invoices",
});
