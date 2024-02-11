<!-- Dropdown.vue -->
<template>
    <div class="dropdown" :class="{ 'dropdown-open': isOpen }">
      <button @click="toggleDropdown">
        {{ buttonText }}
        <img src="@/assets/icons/vector.png" alt="Dropdown Icon" class="dropdown-toggle" />
      </button>
      <ul v-if="isOpen" class="dropdown-list">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps } from 'vue';
  
  const isOpen = ref(false);
  const selectedOption = ref(null);
  
  const { options, buttonText } = defineProps(['options', 'buttonText']);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const selectOption = (option) => {
    selectedOption.value = option;
    isOpen.value = false;
  };
  
  watch(isOpen, (value) => {
    if (!value) {
      selectedOption.value = null;
    }
  });
  </script>
  
  <style scoped>
  .dropdown {
    font-family: "Lato", sans-serif;
    position: relative;
    display: inline-block;
    color: var(--q-icon-color);
    font-weight: 600;
    font-size: 12px;
  }
  
  .dropdown-open {
    color: #5d5fec;
    font-weight: 700;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    padding: 0;
  }
  
  .dropdown-toggle {
    cursor: pointer;
    width: 8.33px;
    height: 5px;
  }
  
  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-list li {
    padding: 8px;
    cursor: pointer;
  }
  </style>
  