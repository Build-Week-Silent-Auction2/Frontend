import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://silent-auctionbw3.herokuapp.com/",
    headers: {
      authorization: token
    }
  });
};
