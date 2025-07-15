<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4"
  >
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Username field -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >Username</label
          >
          <input
            type="text"
            v-model="username"
            required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Password field -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    // Fake login handler
    const handleLogin = async () => {
      if (username.value && password.value) {
        // simulate login
        await store.dispatch("auth/login");
        await store.dispatch("user/setUser");
        router.push("/");
      } else {
        alert("Please fill both fields");
      }
    };

    return {
      username,
      password,
      handleLogin,
    };
  },
});
</script>
