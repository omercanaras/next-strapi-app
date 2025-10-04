import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLeistungen = async () => {
  const res = await api.get("/leistungens?populate=*");
  return res.data.data;
};

export const getAboutMe = async () => {
  const res = await api.get("/aboutmes?populate=*");
  return res.data.data; 
};

export const getJobOffers = async () => {
  const res = await api.get("/job-offers?populate=*");
  return res.data.data;
};