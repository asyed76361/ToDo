<template>
  <q-input
    :color="color"
    @input="updateModelValue"
    :value="value"
    :label="label"
    class="input-filed"
    :type="type"
  >
    <template v-slot:label>
      <div class="label">{{ label }}</div>
    </template>
    <template v-if="prependIcon !== ''" v-slot:prepend>
      <q-icon class="icon-color" :name="prependIcon" />
    </template>
    <template v-else-if="appendIcon !== ''" v-slot:append>
      <q-icon class="icon-color" :name="appendIcon" /> </template
  ></q-input>
</template>

<script setup>
defineProps([
  "color",
  "type",
  "inputClass",
  "value",
  "label",
  "appendIcon",
  "prependIcon",
]);
const emit = defineEmits();

const updateModelValue = (event) => {
  emit("input", event.target.value);
};
</script>

<style scoped>
.icon-color {
  color: var(--q-header-background);
}
.q-field:deep(.q-field__inner) {
  border: 2px solid var(--q-app-secondary);
  padding: 0 20px 0 20px;
  border-radius: 8px;
  background: white;
  color: var(--q-text-color) !important;
}
.label {
  color: var(--q-text-color) !important;
}
.q-field:deep(.q-field__inner .q-field__control .q-field__append) {
  display: none;
}
</style>
