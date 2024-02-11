<template>
  <div class="q-pa-md">
    <div>
      <div class="header-section">
        <div class="table-title text-h6 q-ml-sm"
          >To Do List</div>
          <span>
          <InputField
            borderless
            dense
            style="width: 100%; max-width: 250px"
            v-model="search"
            debounce="500"
            @update:model-value="handleSearch"
            appendIcon=""
            prependIcon="search"
            class="q-ml-md q-ml-auto"
            label="Search"
            placeholder="By Title"
          >
            <template v-slot:label>
              <div class="label">Search</div>
            </template>
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </InputField>
        </span>
      </div>
      <div class="">
        <DashboardTable
          class="q-my-md"
          :columns="todoColumns"
          :rows="data"
          :loading="loading1"
          :pagination="todoPagination"
          @paginationData="handlePagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { onMounted } from "vue";
import { useDashboardStore } from "@/store/dashboard-store";
import DashboardTable from "./DashboardTable.vue";
import { storeToRefs } from "pinia";

const dashboardStore = useDashboardStore();
const {
  data,
  loading,
  loading1,
  loading2,
  regionDataType,
  getCountries,
  countriesPagination,
  noIntegratedCountries,
  getNoIntegrated,
  noIntegratedCountriesPagination,
  countries,
} = storeToRefs(dashboardStore);

const search = ref("");

const todoColumns = ref([
{
    name: "id",
    label: "Id",
    field: "id",
    align: "left",
  },
  {
    name: "user_id",
    label: "User Id",
    field: "user_id",
    align: "left",
  },
  {
    name: "title",
    required: true,
    label: "Title",
    field: "title",
    align: "left",
  },
  {
    name: "description",
    align: "left",
    label: "Description",
    field: "description",
  },
  {
    name: "actions",
    label: "Actions",
    align: "center",
    field: "actions",
  },
]);

const handlePagination = (pageNumber, rows) => {
  dashboardStore.setTodoPagination(pageNumber, rows);
  dashboardStore
    .getTodoData(pageNumber, rows || 10)
    .then((response) => {});
};
const handleSearch = (value) => {
  dashboardStore.getTodoData(
    1,
    "",
    search.value = value,
  )
};

onMounted(() => {
  // dashboardStore.getRegionIntegrated()
  dashboardStore
    .getTodoData(1,"",search.value || "")
    .then((res) => {
      dashboardStore.setLoading(false);
    })
    .catch(() => {
      dashboardStore.setLoading(false);
    })
    .finally(() => {
      dashboardStore.setLoading(false);
    });
});
</script>
<style scoped>
.table-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--q-text-color);
}
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
