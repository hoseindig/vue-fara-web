<template>
  <div class="max-w-4xl mx-auto mt-10 px-4">
    <h2 class="text-2xl font-bold mb-6 text-right text-gray-800">
      ویژگی‌های برند خلاقانه
    </h2>

    <draggable
      v-model="features"
      item-key="id"
      class="grid grid-cols-1 sm:grid-cols-2 gap-6"
      ghost-class="ghost-card"
    >
      <template #item="{ element }">
        <div
          class="bg-white rounded-xl shadow-sm p-6 cursor-move hover:shadow-md transition border"
        >
          <div class="flex items-start gap-4 text-right">
            <!-- آیکون تصویری -->
            <img
              :src="element.icon"
              alt="icon"
              class="w-10 h-10 object-contain"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-1">
                {{ element.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-6">
                {{ element.description }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

// آدرس تصاویر از پوشه public یا assets
const features = ref([
  {
    id: 1,
    title: "ماندگاری",
    description: "برند در داستان طنز مثل یک جوک خوب در ذهن می‌ماند.",
    icon: new URL("@/assets/brain-duotone (1) 1.png", import.meta.url).href,
  },
  {
    id: 2,
    title: "غافلگیری مخاطب",
    description:
      "برند خلاقانه و بامزه وارد داستان می‌شود و لبخند مخاطب را جلب می‌کند.",
    icon: new URL("@/assets/smiley-x-eyes-duotone 1.png", import.meta.url).href,
  },
  {
    id: 3,
    title: "تعامل بیشتر",
    description:
      "اشاره مستقیم، بحث‌برانگیز است و تعامل مخاطبان را افزایش می‌دهد.",
    icon: new URL("@/assets/armchair-duotone 1.png", import.meta.url).href,
  },
  {
    id: 4,
    title: "ارتباط احساسی",
    description: "حضور در موقعیت طنز، حس مثبت و صمیمیت برند را تقویت می‌کند.",
    icon: new URL("@/assets/heartbeat-duotone 1.png", import.meta.url).href,
  },
]);
</script>

<style scoped>
.ghost-card {
  @apply opacity-50;
}
</style>
