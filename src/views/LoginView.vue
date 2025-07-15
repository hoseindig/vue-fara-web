<template>
  <div
    class="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4"
    dir="rtl"
  >
    <!-- ستاره‌ها -->
    <canvas id="starfield" class="absolute inset-0 w-full h-full z-0"></canvas>

    <!-- فرم ورود -->
    <div
      class="relative z-10 bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-right"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const username = ref("");
const password = ref("");
const loading = ref(false);

const store = useStore();
const router = useRouter();

const handleLogin = async () => {
  if (!username.value || !password.value) {
    toast.error("لطفاً فیلدها را پر کنید");
    return;
  }

  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));

  await store.dispatch("auth/login");
  await store.dispatch("user/setUser");

  toast.success("✅ ورود با موفقیت انجام شد");
  router.push("/");
  loading.value = false;
};

// ستاره‌های پس‌زمینه
onMounted(() => {
  const canvas = document.getElementById("starfield") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.2 + 0.05,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function update() {
    stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });
  }

  function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
  }

  animate();
});
</script>
