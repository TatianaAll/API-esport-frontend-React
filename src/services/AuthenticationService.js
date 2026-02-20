// Need to call my backend's API
import { callApiBackend } from "./callApiBackend";

// Login : to call the backend i need ...../users/login
export const login = (email, password) => {
  return callApiBackend.post("/users/login", { email, password });
};
// thanks to axios we have a json like :
/*
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
*/

export const register = (firstname, lastname, email, password) => {
  return callApiBackend.post("/users/signup", {
    firstname,
    lastname,
    email,
    password,
  });
};