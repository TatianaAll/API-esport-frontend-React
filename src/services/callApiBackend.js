// Axios -> https://axios-http.com/docs/intro
// npm install axios --> manage API callings
import axios from "axios";

// Export constant with the base URL of my backend
// axios.create for a new instance of axios (https://axios-http.com/fr/docs/instance)
export const callApiBackend = axios.create({
  baseURL: import.meta.env.VITE_PORT_API_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for manage the errors
// You can intercept requests or responses before they are handled by then or catch.
// https://axios-http.com/docs/interceptors
/*
axios.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
*/
// If response ==> send the waiting response
// If error ==> send the HTTP status + the message
callApiBackend.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject({
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
    });
  },
);
