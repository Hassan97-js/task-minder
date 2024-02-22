import axios, { type AxiosRequestConfig } from "axios";

export function newRequest({ url, data, method, params }: AxiosRequestConfig) {
  return axios({ url, baseURL: "http://localhost:3000", data, method, params });
}
