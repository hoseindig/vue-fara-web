<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4"
    dir="rtl"
  >
    <div
      class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-right relative"
    >
      <h2 class="text-2xl font-bold mb-6 text-gray-800">ورود به حساب کاربری</h2>

      <form @submit.prevent="handleLogin" class="space-y-5" v-if="!loading">
        <div>
          <label class="block mb-1 font-medium text-gray-700">نام کاربری</label>
          <input
            type="text"
            v-model="username"
            required
            placeholder="نام کاربری خود را وارد کنید"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium text-gray-700">رمز عبور</label>
          <input
            type="password"
            v-model="password"
            required
            placeholder="رمز عبور خود را وارد کنید"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          ورود
        </button>
      </form>

      <!-- لودینگ -->
      <div v-if="loading" class="flex justify-center items-center py-10">
        <svg
          class="animate-spin h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      </div>

      <!-- Toast -->
      <Toast v-if="showToast" :message="'✅ ورود با موفقیت انجام شد'" />
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
    const loading = ref(false);
    const showToast = ref(false);

    const handleLogin = async () => {
      if (username.value && password.value) {
        loading.value = true;

        await new Promise((resolve) => setTimeout(resolve, 1500));
        await store.dispatch("auth/login");
        await store.dispatch("user/setUser");
        loading.value = false;

        showToast.value = true;

        // بعد چند لحظه بره به صفحه اصلی
        router.push("/");
      } else {
        alert("لطفاً هر دو فیلد را پر کنید");
      }
    };

    return {
      username,
      password,
      loading,
      handleLogin,
      showToast,
    };
  },
});
</script>
