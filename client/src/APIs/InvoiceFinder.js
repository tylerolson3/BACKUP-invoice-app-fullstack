import axios from "axios";
import axiosRetry from "axios-retry";

const InvoiceFinder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "https://localhost:6000/api/v1/invoices"
      : "https://invoice-app-tyler.herokuapp.com/api/v1/invoices",
  timeout: 5000,
});

axiosRetry(InvoiceFinder, { retries: 3 });

export default InvoiceFinder;

// export default axios.create({
//   // baseURL: "http://localhost:3001/api/v1/invoices",
//   baseURL: "https://invoice-app-tyler.herokuapp.com/api/v1/invoices",
// });
