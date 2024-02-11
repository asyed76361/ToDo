import { defineStore } from "pinia";
import {
  postRequest,
  HTTP,
} from "@/helper/http-config";
import { showSnackBar } from "@/helper/index";
import { useRouter } from "vue-router";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      isAuthenticated: false,
      userName: "",
    };
  },
  getters: {},
  actions: {
    async handleLogin(payload) {
      try {
        const response = await postRequest("login", payload);
        const token = response.data.user.token;
        HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        this.token = token;
        this.isAuthenticated = true;
        this.userName = response.data.user.name;
        showSnackBar(true, "Login successful");
        router.push("/");

        return response;
      } catch (error) { }
    },
    async handleRegistration(payload) {
      try {
        const response = await postRequest("register", payload);
        showSnackBar(true, response?.data.message);
        router.push("/login");
        return response;
      } catch (error) { }
    },
    async handleTodo(payload) {
      try {
        const response = await postRequest("item", payload);
        showSnackBar(true, "Created Successfully");
        router.push("/");
        return response;
      } catch (error) { }
    },
    async handleLogout() {
      try {
        const response = await postRequest("logout");
        this.token = "";
        this.isAuthenticated = false;
        showSnackBar(true, "Logout successful");
        router.push("/login");
      } catch (error) { }
    },
  },
  persist: true,
});
