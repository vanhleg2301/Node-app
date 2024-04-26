import axios from "axios";
import { ENDPOINT } from "./constants";

export const Request = async (payload, uri) => {
  if (localStorage.getItem("accessToken")) {
    const res = await axios.post(`${ENDPOINT}/${uri}`, {
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      if (res.status === 403) {
        return null;
      }
    }

    const { data } = res;
    return data;
  }

  return null;
};

export const RequestGet = async (uri, options = {}) => {
  if (localStorage.getItem("accessToken")) {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.get(`${ENDPOINT}/${uri}`, {
      headers: {
        // method: "GET",
        // "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...options,
      },
    });

    const { data } = res;
    return data;
  }

  return null;
};

export const RequestDelete = async (uri, options = {}) => {
  if (localStorage.getItem("accessToken")) {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.delete(`${ENDPOINT}/${uri}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...options,
      },
    });

    const { data } = res;
    return data;
  }

  return null;
};
