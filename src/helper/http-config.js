import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
import { showSnackBar } from "./index.js";
import router from "@/router/index.js";

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export function postRequest(endPoint, payload) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.post(endPoint, payload);
}

export function patchRequest(endPoint, payload) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.patch(endPoint, payload);
}

export function putRequest(endPoint, payload) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.put(endPoint, payload);
}

export function getRequest(endPoint) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.get(endPoint);
}

export function deleteRequest(endPoint) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.delete(endPoint);
}

HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.data.statusCode === 401) {
        router.push("/");
        showSnackBar(false, error.response.data.message);
        localStorage.clear();
      } else {
        showSnackBar(false, error.response.data.message);
      }
    } else if (error.request) {
      showSnackBar(false, "Something went wrong");
    } else {
      showSnackBar(false, "Something went wrong");
    }

    return Promise.reject(error);
  }
);
