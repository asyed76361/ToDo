<template>
  <q-table
    bordered
    dense
    flat
    title="Treats"
    rows="rows"
    class="activity-table"
    columns="columns"
    row-key="name"
    virtual-scroll
    separator="cell"
  >
    <!-- <template v-slot:top>
      <q-input
        borderless
        dense
        debounce="300"
        color="primary"
        label="Search By User Name"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-space />
      <q-btn color="primary" label="Add row" />
      <q-btn class="q-ml-sm" color="primary" label="Remove row" />
    </template> -->

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td
          key="name"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          {{ props.row.name }}
        </q-td>
        <q-td
          key="type"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          {{ props.row.type }}
        </q-td>
        <q-td
          key="createdAt"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          {{ props.row.createdAt }}
        </q-td>
        <q-td
          key="category"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          {{ props.row.category }}
        </q-td>
        <q-td
          key="body"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          {{ props.row.body }}
        </q-td>

        <q-td
          key="actions"
          :props="props"
          style="font-size: 12px; line-height: 14.4px; color: #484964"
        >
          <q-btn
            flat
            round
            color="white"
            text-color="black"
            toggleUser="true"
            size="sm"
            class="nav-link"
          >
            <img src="@/assets/icons/pen.png" alt="" />
            <q-tooltip
              transition-show="scale"
              style="
                background: var(--q-text-active);
                font-size: 11px;
                font-weight: 600;
                font-family: 'Lato', sans-serif;
              "
              transition-hide="scale"
            >
              Edit Detail
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            color="white"
            text-color="black"
            toggleUser="true"
            size="sm"
            class="nav-link"
          >
            <img src="@/assets/icons/Eye.png" alt="" />
            <q-tooltip
              transition-show="scale"
              style="
                background: var(--q-text-active);
                font-size: 11px;
                font-weight: 600;
                font-family: 'Lato', sans-serif;
              "
              transition-hide="scale"
            >
              View Detail
            </q-tooltip>
          </q-btn>
        </q-td>
         <q-td key="calcium" :props="props">
          {{ props.row.calcium }}
        </q-td>
        <q-td key="iron" :props="props">
          {{ props.row.iron }}
        </q-td> 
      </q-tr>
    </template>

    <template v-slot:pagination="scope">
      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.prevPage"
      />

      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.nextPage"
      />
    </template>
  </q-table>
 </template>

<script setup>
import { ref } from "vue";

defineProps(["columns, rows, pagination"]);

const viewToggle = ref(false);
const editToggle = ref(false);
const toggleEdit = () => {
  editToggle.value = true;
};
const toggleView = () => {
  viewToggle.value = true;
};
</script>

<style>
.table {
  border: 1px solid #e8ebf4;
  font-family: "Lato", sans-serif;

  border-radius: 8px;
}
.heading-row {
  font-weight: bold;
  font-family: "Lato", sans-serif;
}
.activity-table{
  max-height: 600px;
  height: 100%;
}
.activity-table table thead tr th {
  position: sticky;
  top: 0px;
}

</style>
