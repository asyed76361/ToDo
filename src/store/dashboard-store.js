import { defineStore } from "pinia";
import { getRequest, deleteRequest, putRequest } from "@/helper/http-config";
import { showSnackBar } from "@/helper/index";

export const useDashboardStore = defineStore("useDashboardStore", {
  state: () => ({
    page: 1,
    data: [],
    todoPagination: {
      sortBy: null,
      descending: false,
      page: 0,
      totalPages: 0,
      totalCount: 0,
      rowsPerPage: 0,
    },
    loading1: false,
    selectedItem: null, // Added property to store the selected item
  }),
  actions: {
    async getTodoData(page, limit, search) {
      try {
        this.loading1 = true;
        const response = await getRequest(
          `items?page=${page}&search=${search || ""}&limit=${limit || 10}`
        );
        this.data = response?.data?.items?.data;
        this.todoPagination = {
          sortBy: "desc",
          descending: false,
          page: response?.data?.items?.current_page,
          totalPages: response?.data?.items?.total,
          totalCount: response?.data?.items?.total,
          rowsPerPage: response?.data?.items.per_page,
        };

        return response;
      } catch (err) {
      } finally {
        this.loading1 = false;
      }
    },
    async getTodoItemById(id) {
      try {
        const response = await getRequest(`item/${id}`);
        return response.data;
      } catch (error) {
      }
    },
    async handleUpdateTodo(id,payload) {
      try {
        const response = await putRequest(`item/${id}`, payload);
        showSnackBar(true, "Source Updated Successfully");
        router.push("/");
        return response;
      } catch (error) {
      }
    },
    async deleteTodoItem(id) {
      try {
        await deleteRequest(`item/${id}`);
        this.data = this.data.filter(item => item.id !== id);
        showSnackBar(true, response.data.message);
      } catch (error) {
      }
    },
    async selectedTodoItem(id) {
      try {
        const response = await this.getTodoItemById(id);
        this.selectedItem = response.data;
        return response;
      } catch (error) {
      }
    },
    setLoading(bool) {
      this.loading = bool;
    },
    setTodoPagination(page, rowsPerPage) {
      this.todoPagination.currentPage = page;
      this.todoPagination.rowsPerPage = rowsPerPage;
    },
  },
  getters: {
    getdata(state) {
      return state.data;
    },
  },
  persist: false,
});
