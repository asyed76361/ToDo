<template>
  <div class="navbar">
    <div class="row align-center">
      <q-btn
        icon="menu"
        flat
        @click="toggleMenu"
        class="hamburger"
        v-show="isMobile"
      />
      <div class="navbar-heading">ToDo</div>
    </div>

    <!-- Navbar Items -->
    <div :class="{ 'navbar-items': true, show: menuOpen }">
      <router-link
        to="/"
        class="navbar-item"
        active-class="navbar-item-active"
        exact
      >
        <img
          src="../assets/icons/layout-dashboard.png"
          alt="User Icon"
          class="navbar-icon"
        />
        <span>Dashboard</span></router-link
      >

      <router-link
        to="/createtodo"
        class="navbar-item"
        active-class="navbar-item-active"
      >
        <img
          src="../assets/icons/userprofile.png"
          alt="User Icon"
          class="navbar-icon"
        />
        <span>Create ToDo</span>
      </router-link>
      <!-- Mobile View: User Dropdown -->
      <div class="mobile-dropdown-container" v-show="isMobile">
        <q-btn class="navbar-user" @click="toggleDropdown" flat>
          <span class="user-name">{{ authStore.userName || "Guest" }}</span>
          <q-icon name="arrow_drop_down" class="dropdown-icon"></q-icon>
        </q-btn>
        <div>
          <q-menu style="height: auto" v-model="dropdownOpen">
            <q-list>
              <q-item
                class="extra-mobile-logout"
                clickable
                v-close-popup
                @click="logout"
              >
                <q-icon name="vpn_key" class="menu-icon q-mr-sm"></q-icon>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </div>
    </div>

    <q-space></q-space>

    <!-- User Dropdown -->
    <div class="dropdown-container">
      <div class="user-initials" v-if="authStore.userName">
        {{
          authStore.userName
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        }}
      </div>
      <q-btn class="navbar-user" @click="toggleDropdown" flat>
        <span class="user-name">{{ authStore.userName || "Guest" }}</span>
        <q-icon name="arrow_drop_down" class="dropdown-icon"></q-icon>
      </q-btn>
      <q-menu
        transition-show="jump-down"
        transition-hide="fade"
        v-model="dropdownOpen"
        anchor="bottom right"
        self="top right"
        style="height: auto"
      >
        <q-list>
          <q-item class="mobile-logout" clickable v-close-popup @click="logout">
            <q-icon name="vpn_key" class="menu-icon q-mr-sm"></q-icon>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, watch } from "vue";
import { QBtn, QIcon, QMenu, QList, QItem, QItemSection } from "quasar";
import { useRouter } from "vue-router";
import { Notify } from "quasar";
import { useAuthStore } from "@/store/auth-store";

const dropdownOpen = ref(false);
const menuOpen = ref(false);
const isMobile = ref(window.innerWidth < 950);

const authStore = useAuthStore();
const router = useRouter();

const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdownOpen.value = !dropdownOpen.value;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const logout = async () => {
  await authStore.handleLogout();
  dropdownOpen.value = false;
  router.push({ name: "login" });
  localStorage.clear();
};

onMounted(() => {
  const handleResize = () => {
    isMobile.value = window.innerWidth < 950;
  };

  window.addEventListener("resize", handleResize);

  watch(
    () => isMobile.value,
    () => {
      window.removeEventListener("resize", handleResize);
    }
  );
});
</script>



<style scoped>
.mobile-dropdown-separator {
  border: 0;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
}
.avatar-icon {
  border-radius: 50%;
  /* background-color: #E0E0E0;  */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--q-app-bg);
  padding: 0 20px;
  height: 35px;
}
.dropdown-container {
  /* margin-right: 20px; */
  display: flex;
  align-items: center;
}
.row.align-center {
  display: flex;
  align-items: center;
}
.logo {
  width: 100px;
  height: 24.09px;
  margin-right: 8px;
}
.hamburger {
  display: none;
}
.navbar-heading {
  font-weight: 600;
  font-size: 18.15px;
  line-height: 21.78px;
  color: var(--q-app-logo-text);
  margin-right: 60px;
  align-content: start;
}
.navbar-item {
  font-family: Lato, sans-serif;
  font-size: 13px;
  margin-right: 20px;
  padding: 10px 15px;
  text-decoration: none;
  color: var(--q-text-color);
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
}
.navbar-icon {
  height: 12px;
  width: 12px;
  margin-right: 8px;
}
.navbar-item-active,
.navbar-item:hover {
  color: var(--q-selected-tab);
  font-weight: 700;
}
.navbar-user {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  /* font-size: 12px; */
}
.user-initials {
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin-right: 8px;
  color: var(--q-text-heading);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white ;

}
.user-image {
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin-right: 8px;
}
.user-name {
  font-family: Lato, sans-serif;
  font-weight: 500;
  margin-right: 8px;
  font-size: 11.5px;
  color: var(--q-text-color);
  text-transform: capitalize;
}
.dropdown-icon {
  font-size: 24px;
  color: var(--q-text-color);
}
.q-menu {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: auto;
}
.q-item {
  cursor: pointer;
  width: auto;
  min-height: auto;
  padding: 2px 16px;
  align-items: center;
}
.q-item:hover {
  background-color: var(--q-app-bg);
  /* color: var(--q-btn-modal); */
}
.mobile-user-image {
  display: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 8px;
}
.mobile-user-name {
  display: none;
  font-size: 14px;
  color: var(--q-text-color);
}
.mobile-dropdown-options {
  display: none;
}
.mobile-dropdown-container {
  display: none;
}
.extra-mobile-logout {
  display: none;
}
@media (max-width: 950px) {
  .hamburger {
    display: block;
    padding-left: 0px;
    color: var(--q-text-color);
  }
  .mobile-logout {
    display: none;
  }
  .extra-mobile-logout {
    display: flex;
    flex-direction: row;
  }
  .navbar-items,
  .dropdown-container {
    display: none;
  }
  .navbar-items.show {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--q-app-bg);
    width: 218px;
    height: 100vh;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .navbar-item[data-v-41458b80] {
    margin: 0px 0;
  }
  .navbar-item {
    margin: 10px 0;
  }
  .mobile-user-image {
    display: block;
  }
  .mobile-dropdown-options {
    display: block;
    /* padding: 10px; */
  }
  .mobile-dropdown-container {
    display: block;
    padding: 10px 15px;
  }
  .mobile-user-name {
    display: block;
    font-size: 14px;
    color: var(--q-text-color);
  }
}
</style>


