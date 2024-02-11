<template>
  <q-btn
    :icon="appendIcon"
    :class="inputClass"
    class="btn"
    :loading="loading"
    :type="type"
    :icon-right="prependIcon"
    :placeholder="placeholder"
    :label="label"
  >
    <template v-slot:loading>
      <q-spinner-ios class="loading" size="1em" />
    </template>
  </q-btn>
</template>

<script setup>
defineProps([
  "type",
  "inputClass",
  "label",
  "appendIcon",
  "prependIcon",
  "loading",
  "placeholder",
]);
</script>

<style>
.btn {
  font-family: "Inter", sans-serif !important;
  background: var(--q-header-background) !important;
  color: var(--q-app-bg) !important;
  text-transform: capitalize !important;
  border-radius: 8px !important;
  font-size: 12px !important;
  line-height: 14.52px !important;
  font-weight: 400 !important;
  width: 100% !important;
  height: 50px !important;
}
.loading {
  color: var(--q-app-bg);
  font-size: 12px;
  line-height: 14.52px;
  font-weight: 400;
}
</style>
