<template>
  <div id="app">
    <nav
      v-if="isAuthenticated"
      class="flex justify-between items-center p-4 bg-gray-100 shadow text-right"
    >
      <div class="flex gap-4">
        <router-link to="/" class="text-blue-600 font-semibold"
          >خانه</router-link
        >
        <router-link to="/about" class="text-blue-600 font-semibold"
          >درباره ما</router-link
        >
      </div>
      <button
        @click="logout"
        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        خروج
      </button>
    </nav>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const isAuthenticated = computed(
      () => store.getters["auth/isAuthenticated"]
    );

    const logout = () => {
      store.dispatch("auth/logout");
      router.push("/login");
    };

    return {
      isAuthenticated,
      logout,
    };
  },
});
</script>

<style scoped>
.router-link-exact-active {
  color: #42b983;
}
</style>
