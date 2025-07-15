<template>
  <div class="home">
    <HeaderButton @update="handleToggle" />
    <!-- @update:features="saveFeaturesToStore" -->
    <DragDropUpload v-model="features" />
    <!-- محتوای تب‌ها -->
    <div
      v-if="activeTab === true"
      class="bg-white p-6 rounded shadow text-right"
    >
      <h3 class="text-lg font-bold mb-2">محتوای تب اول</h3>
      <p class="text-gray-600 leading-relaxed">
        اینجا محتوای مربوط به تب اول قرار می‌گیرد. می‌توانید هر چیزی مانند فرم،
        متن، تصویر یا کامپوننت قرار دهید.
      </p>
    </div>

    <div
      v-if="activeTab === false"
      class="bg-white p-6 rounded shadow text-right"
    >
      <h3 class="text-lg font-bold mb-2">محتوای تب دوم</h3>
      <p class="text-gray-600 leading-relaxed">
        اینجا محتوای مربوط به تب دوم قرار می‌گیرد. مثلاً لیستی از داده‌ها یا
        تنظیمات یا هر چیز دیگر.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

import HeaderButton from "../components/HeaderButton.vue";
import DragDropUpload from "../components/DragDrop.vue";

const selected = ref(false);
// const activeTab = ref<"first" | "second">("first");
const activeTab = ref(false);

const featuresList = ref([]);
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

const handleToggle = (val: boolean) => {
  selected.value = val;
  activeTab.value = val;
  console.log("handleToggle", val);
};

const saveFeaturesToStore = (features: any[]) => {
  // selected.value = val;
  featuresList.value = features;
  console.log("saveFeaturesToStore", JSON.parse(JSON.stringify(features)));
  store.commit("features/setFeatures", features);
};
</script>
