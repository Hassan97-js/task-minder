import axios, { type AxiosRequestConfig } from "axios";

export function newRequest({ url, data, method, params }: AxiosRequestConfig) {
  return axios({ url, data, method, params });
}
