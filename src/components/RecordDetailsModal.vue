<template>
  <q-dialog :model-value="showModal" @update:model-value="updateShowModal" persistent>
    <q-card>
      <q-card-section>
        <div>ID: {{ record.id }}</div>
        <div>Title: {{ record.title }}</div>
        <div>Description: {{ record.description }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Close" color="primary" @click="closeModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  record: {
    type: Object,
    required: true
  },
  showModal: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['update:showModal']);

const closeModal = () => {
  emits('update:showModal', false);
};

const updateShowModal = (value) => {
  emits('update:showModal', value);
};
</script>
