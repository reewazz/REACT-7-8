import axios from "axios";

const token = localStorage.getItem("token");

export const APIURL = import.meta.env.VITE_API_URL

export function GetRequest(url) {
  const response =  axios.get(`${APIURL}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response
}


export function PostRequest (url,body) {
    const response = axios.post(`${APIURL}/${url}`,body,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}