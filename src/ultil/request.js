import axios from "axios";
import { ENDPOINT } from "./constants";

export const Request = async (payload, uri, options = {}) => {
  if (localStorage.getItem("accessToken")) {
    const res = await axios(`${ENDPOINT}/${uri}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      if (res.status === 403) {
        return null;
      }
    }

    const { data } = await res.json();
    return data;
  }

  return null;
};

export const RequestGet = async (uri, options = {}) => {
  if (localStorage.getItem("accessToken")) {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios(`${ENDPOINT}/${uri}`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
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
    const res = await axios(`${ENDPOINT}/${uri}`, {
      headers: {
        method: "DELETE",
        "Content-Type": "application/json",
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
