import axios from "axios";

const axiosURL = axios;
axiosURL.defaults.baseURL = "http://localhost:5000";

export const register = (newUser) => {
  return axiosURL
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axiosURL
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (user) => {
  return axiosURL
    .get("users/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
