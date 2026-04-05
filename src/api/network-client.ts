import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { baseURL } from "./constants";

export const networkClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

networkClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Add auth token
  return config;
});