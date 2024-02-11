<template>

  <q-table
    flat
    bordered
    :dense="$q.screen.xs"
    :rows="rows"
    class="dashboard-table"
    :columns="columns"
    row-key="name"
    virtual-scroll
    separator="cell"
    :loading="loading"
    :pagination="pagination"
    :rows-per-page-options="[5, 10]"
    @update:pagination="handlePagination"
  >
    <template v-slot:bottom>
      <div
        style="
          font-size: 11px;
          font-weight: 500;
          line-height: 15.4px;
          color: var(--q-text-heading);
        "
      >
        Total Results: {{ pagination?.totalCount }}
      </div>
      <q-space />
      <span class="text-caption">Rows Per Page: </span>
      <DropDown
        dense
        borderless
        style="border: none"
        @changeValue="handleRows"
        v-model="rowsPerPage"
        class="q-mx-sm"
        default
        :option="['10']"
        appendIcon=""
        prependIcon=""
      />

      <span class="text-caption"
        >Page: {{ pagination?.page }} of {{ pagination?.totalPages }}</span
      >
      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="pagination?.page === 1 || loading"
        @click="handlePage(pagination?.page - 1, pagination?.rowsPerPage)"
      />
      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="pagination?.totalPages === pagination?.page || loading"
        @click="handlePage(pagination?.page + 1, pagination?.rowsPerPage)"
      />
    </template>

    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-icon
          name="delete"
          @click="deleteRow(props.row.id)"
          class="cursor-pointer text-negative"
        />
        <!-- Margin -->
        <span style="margin: 0 8px"></span>
        <!-- Edit Icon -->
        <q-icon
          name="edit"
          @click="navigateToEdit(props.row)"
          class="cursor-pointer text-primary"
        />
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useDashboardStore } from "@/store/dashboard-store";
import Update from "../Update/Update.vue";
const router = useRouter();
const dashboardStore = useDashboardStore();

const navigateToEdit = (row) => {
  router.push({ name: "updatetodo", params: { id: row.id }, query: { data: JSON.stringify(row) } });
};

const deleteRow = (id) => {
  dashboardStore.deleteTodoItem(id);
};
</script>

<style scoped>
.dashboard-table {
  max-height: 600px;
  height: 100%;
  overflow: auto;
}
.dashboard-table table thead tr th {
  position: sticky;
  top: 0px;
  background-color: var(--q-header-background) !important;
}
</style>
