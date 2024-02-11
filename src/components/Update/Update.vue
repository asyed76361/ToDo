<template>
  <div class="body">
    <q-page class="flex flex-column items-center justify-center">
      <div class="flex visible-content flex-column justify-center">
        <div class="q-mb-md row"></div>
        <div class="q-pa-md login-card">
          <div class="text-h5 text-center q-mb-md">Update Previous ToDo</div>
          <div class="text-subtitle2 q-mb-md">
            Please Enter New Title and Description to update previous ToDo.
          </div>
          <q-form @submit.prevent="onSubmit" class="form-control">
            <InputField
              borderless
              v-model="title"
              label="Title"
              class="q-mb-md"
              appendIcon=""
              prependIcon=""
              type="text"
            />

            <q-input
              v-model="description"
              borderless
              class="q-mb-md"
              label="Description"
              type="textarea"
            >
              <template v-slot:label>
                <div class="label">Description</div>
              </template>
            </q-input>
            <Button
              :loading="loading"
              style="max-width: 465px"
              type="submit"
              label="Update"
            />
          </q-form>
        </div>
      </div>
    </q-page>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDashboardStore } from "../../store/dashboard-store.js";
const dashboardStore = useDashboardStore();
const router = useRouter();
const loading = ref(false);
const route = useRoute();
const title = ref("");
const description = ref("");
import { onMounted } from "vue";
const props = defineProps();
onMounted(() => {
  if (props.data) {
    title.value = props.data.title;
    description.value = props.data.description;
  }
});

const routeData = JSON.parse(route.query.data || '{}');

title.value = routeData.title || '';
description.value = routeData.description || '';
const onSubmit = () => {
  loading.value = true;
  dashboardStore
    .handleUpdateTodo(routeData.id, {
      title: title.value,
      description: description.value,
    })
    .catch((error) => {})
    .finally(() => {
      loading.value = false;
      router.push("/");
    });
};
</script>

<style scoped>
.body {
  background-size: cover;
  background-position: top;
}
.login-button {
  background-color: var(--q-header-background);
}
.rem {
  cursor: pointer;
}
.q-link {
  text-decoration: none;
  color: var(--q-header-background);
  cursor: pointer;
}

.top-content {
  text-align: center;
}
.header {
  font-family: "Lato", sans-serif !important;
  color: #323346;
  font-weight: 600;
  font-size: 28.15px;
}
.icon {
  width: 41px;
  height: 38px;
}

.top-content q-col {
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  max-width: 464px;
  margin-bottom: 0;
}
.login-card {
  background-color: white;
  max-width: 599px;
  width: 100%;
  height: 448px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-h5 {
  font-family: "Inter", sans-serif !important;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;
  color: var(--q-text-heading);
}

.text-subtitle2 {
  font-family: "Inter", sans-serif !important;
  font-weight: 400px;
  font-size: 13px;
  line-height: 15.73px;
  color: var(--q-faded-text);
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
.icon-color {
  color: var(--q-header-background);
}
@media (max-width: 631px) {
  .login-card {
    background-color: white;
    width: 100%;
    height: 428px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
  }
  .visible-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
    max-width: 350px;
    width: 100%;
  }
}
ror-message {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.q-field:deep(
    .q-field__inner .q-field__control .q-field__append .text-negative
  ) {
  display: none;
}
.q-checkbox .q-checkbox__inner--truthy .q-checkbox__bg {
  background: var(--q-header-background);
}
.q-checkbox .q-checkbox__inner--falsy .q-checkbox__bg {
  background: var(--q-white);
}
.q-checkbox .q-checkbox__inner--truthy {
  color: var(--q-header-background);
}
</style>
