<template>
  <q-select
    :color="color"
    @update:model-value="updateModelValue"
    :style="style"
    :model-value="modelValue"
    :options="option"
    :label="label"
    class="input-filed"
  >
    <template v-slot:label>
      <div class="label">{{ label }}</div>
    </template>
    <template v-if="prependIcon !== ''" v-slot:prepend>
      <q-icon class="icon-color" :name="prependIcon" />
    </template>
    <template v-else-if="appendIcon !== ''" v-slot:append>
      <q-icon class="icon-color" :name="appendIcon" />
    </template>
  </q-select>
</template>

<script setup>
import { ref } from "vue";

const { modelValue } = defineProps([
  "color",
  "type",
  "inputClass",
  "modelValue",
  "label",
  "appendIcon",
  "prependIcon",
  "option",
  "style",
]);
const emit = defineEmits();
const updateModelValue = (value) => {
  emit("changeValue", value);
};
</script>

<style scoped>
.icon-color {
  color: var(--q-icon-color);
}
.row :deep(.q-field .q-field__inner) {
  border: 2px solid var(--q-app-secondary);
  padding: 0 20px 0 20px;
  border-radius: 8px;
  background: white;
  color: var(--q-text-color) !important;
}
.label {
  color: var(--q-text-color) !important;
}
.q-field {
  border: 2px solid var(--q-app-secondary);
  border-radius: 8px;
  padding: 0 5px 0 10px;
}
</style>
